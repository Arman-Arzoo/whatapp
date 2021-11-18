import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarChat.css";

export const SidebarChat = (props) => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>{props.name}</h2>
        <p>Last message</p>
      </div>
    </div>
  );
};
