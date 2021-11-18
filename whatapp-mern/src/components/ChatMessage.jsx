import React from "react";

export const ChatMessage = () => {
  return (
    <p className="chat__message">
      <span className="chat__name">arman</span>
      This is message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
  );
};
