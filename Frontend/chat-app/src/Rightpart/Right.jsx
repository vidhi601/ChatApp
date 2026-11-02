import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import TextPart from "./TextPart";
import Chatbox from "./Chatbox";

function Right({ selectedUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!selectedUser) {
      setMessages([]);
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:3004/message/${selectedUser._id}`,
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setMessages(data);
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [selectedUser]);

  const handleMessageSent = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="w-[70%] h-screen bg-slate-900 text-white">
      <UserProfile selectedUser={selectedUser} />

      <div
        className="overflow-y-auto hide-scroll"
        style={{ maxHeight: "calc(92vh - 8vh)" }}
      >
        <TextPart messages={messages} />
      </div>

      <Chatbox
        selectedUser={selectedUser}
        onMessageSent={handleMessageSent}
      />
    </div>
  );
}

export default Right;