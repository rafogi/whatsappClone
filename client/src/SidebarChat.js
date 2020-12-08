import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar/>
      <div className="sidebarChat__info">
        <h2>room name</h2>
        <p>this is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;