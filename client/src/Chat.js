import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Chat.css"
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons"
import MicIcon from '@material-ui/icons/Mic';

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) =>
          <p className={`chat__message ${message.received && "chat__receiver"}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
        )}
        <p className="chat__message">
          <span className="chat__name">
            Raffy
          </span>
          hello Anna
          <span className="chat__timestamp">
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">
            Raffy
          </span>
          wutsup?
          <span className="chat__timestamp">
            {new Date().toLocaleString()}
          </span>
        </p>

        <p className="chat__message">
          <span className="chat__name">
            Raffy
          </span>
          #teamDosan
          <span className="chat__timestamp">
            {new Date().toLocaleString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button
            // onClick={sendMessage}
            type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;