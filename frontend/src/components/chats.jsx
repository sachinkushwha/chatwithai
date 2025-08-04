import { useEffect, useState } from "react";

export const Chats = ({ messages, usermsg }) => {
  console.log("User messages:", usermsg);
  console.log("Bot messages:", messages);

  // Merge usermsg and messages into pairs
  const combinedChats = usermsg?.map((um, i) => ({
    user: um,
    bot: messages[i] || "thinking...",
  }));

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-md mx-auto mt-6 space-y-4">
      <div className="space-y-4 ">
        {combinedChats?.map((chat, index) => (
          <div key={index} className="space-y-2">
            <div className="bg-blue-100 text-blue-900 flex flex-row sm:flex-row gap-2 p-3 rounded-lg shadow-md">
              <strong>You:</strong>
              <p className="break-words">{chat.user}</p>
            </div>
            <div className="bg-gray-200 text-gray-800 flex flex-row sm:flex-row gap-2 p-3 rounded-lg shadow-md">
              <strong>Bot:</strong>
              <p className="break-words">{chat.bot}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
