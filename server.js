const express = require("express");
const mongoose = require("mongoose");
const Message = require("./dbMessages");
const Pusher = require('pusher');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

const pusher = new Pusher({
  appId: "1133379",
  key: "c53a916f4cf3da7628db",
  secret: "bc0d08ccf957fe05e9bf",
  cluster: "us3",
  useTLS: true
});

app.use(cors());

const connection_url = 'mongodb+srv://admin:admin@cluster0.qyu7u.mongodb.net/whatsappdb?retryWrites=true&w=majority'

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || connection_url, {
  useCreateIndex: true,
  useNewUrlPareser: true,
  useUnifiedToplogy: true
})

const db = mongoose.connection;

db.once('open', () => {
  console.log('DB connected');

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    console.log("A Change occured", change);

    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted',
        {
          name: messageDetails.name,
          message: messageDetails.message,
          timestamp: messageDetails.timestamp,
          received: messageDetails.received
        }
      );
    } else {
      console.log('Error triggering Pusher')
    }
  });
});

app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
  Message.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body

  Message.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(`new message created: \n ${data}`)
    }
  })
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => console.log(`listening on localhost:${port}`))

