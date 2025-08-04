import { useRef, useState } from "react";
import { Chat } from "./api/api";
import { Chats } from "./components/chats";

function App() {
  const [usermsg, setusermsg] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const msguser = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = msguser.current.value.trim();
    if (!message) return;

    setusermsg((prev) => [...prev, message]);
    msguser.current.value = "";

    // Call API
    Chat(message).then((response) => {
      setChatHistory((prev) => [...prev, response]);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-3 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600 text-center sticky top-0 bg-gray-100 z-10 w-full py-2">
        J.A.R.V.I.S
      </h1>

      {/* Chat component */}
      <div className="w-full  max-w-md flex-1 overflow-y-auto mb-4">
        <Chats messages={chatHistory} usermsg={usermsg} />
      </div>

      {/* Input form */}
       <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-3 sm:p-4 rounded-xl shadow-md flex gap-2"
      >
        <input
          type="text"
          placeholder="Type your message..."
          ref={msguser}
          className="flex-grow  px-3 py-2 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
