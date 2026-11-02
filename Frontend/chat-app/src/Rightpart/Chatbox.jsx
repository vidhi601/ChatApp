import { useState } from "react";
import { IoSend } from "react-icons/io5";

function Chatbox({ selectedUser, onMessageSent }) {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim() || !selectedUser) return;

    try {
      const response = await fetch(
        `http://localhost:3004/message/${selectedUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ text: message }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent");
      }

      onMessageSent(data);
      setMessage("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={sendMessage}
      className="flex w-full bg-slate-800 space-x-2 p-2 h-[8vh]"
    >
      <div className="w-[70%] rounded-lg">
        <input
          type="text"
          placeholder={
            selectedUser ? "Type here" : "Select a user first"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!selectedUser}
          className="input w-full"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={!selectedUser || !message.trim()}
          className="text-2xl p-2 rounded-full hover:bg-slate-700 disabled:opacity-50"
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default Chatbox;