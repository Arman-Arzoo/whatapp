import React from "react";
import "./chat.css";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { ChatMessage } from "./ChatMessage.jsx";
import { ChatReciever } from "./ChatReciever";
export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Arman Ali</h3>
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
      {/* chat body */}
      <div className="chat__body">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatReciever />
      </div>

      {/* chat footer */}
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type Message here" />
          <button type="submit"> Send a Message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};
