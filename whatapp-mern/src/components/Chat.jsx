import React from "react";
import "./chat.css";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { ChatMessage } from "./ChatMessage.jsx";
import { ChatReciever } from "./ChatReciever";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>last seen....</p>
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
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatReciever />
      </div>
    </div>
  );
};
