import React, {useEffect} from "react";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    const pusher = new Pusher('c53a916f4cf3da7628db', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
