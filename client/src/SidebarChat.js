import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar/>
      <div className="sidebarChat__info">
        <h2>roomname</h2>
        <p>just another room</p>
      </div>
    </div>
  );
};

export default SidebarChat;