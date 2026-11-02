import React from "react";

function TextPart({ messages }) {
  return (
    <div
      className="hide-scroll p-3"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {messages.map((message) => (
        <div
          key={message._id}
          className="mb-3 rounded-lg bg-slate-700 p-3 break-words"
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default TextPart;