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

    // Call API once
    Chat(message).then(response => {
      setChatHistory((prev) => [...prev, response]);
    });


  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600 sticky top-0">J.A.R.V.I.S</h1>
      <Chats messages={chatHistory} usermsg={usermsg} />
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-4 rounded-xl shadow-md flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          ref={msguser}
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>


    </div>
  );
}

export default App;
