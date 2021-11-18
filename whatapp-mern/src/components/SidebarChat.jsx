import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
};
