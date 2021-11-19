import React from "react";

export const ChatMessage = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <p className={`chat__message ${message.received && "chat__reciever"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      ))}
    </>
  );
};
