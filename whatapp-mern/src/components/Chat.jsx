import React, { useState } from "react";
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
import axios from "../api/axios.js";

export const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/message/new", {
      message: input,
      name: "arman",
      timeStamp: "just now..",
      recieved: false,
    });
    setInput("");
  };

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
        <ChatMessage messages={messages} />
      </div>

      {/* chat footer */}
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type Message here"
          />
          <button onClick={sendMessage} type="submit">
            {" "}
            Send a Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};
