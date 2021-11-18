import React from "react";

export const ChatReciever = () => {
  return (
    <p className="chat__reciever chat__message">
      <span className="chat__name">arman</span>
      This is message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
