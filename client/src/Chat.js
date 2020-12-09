import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import "./Chat.css"
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons"


const Chat = () => {
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
        <p className="chat__message">
          <span className="chat__name">
            Raffy
          </span>
          hello world
          <span className="chat__timestamp">
            {new Date().toLocaleString()}
          </span>


        </p>
      </div>
    </div>
  );
};

export default Chat;