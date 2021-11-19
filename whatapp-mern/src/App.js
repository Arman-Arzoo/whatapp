import { useEffect, useState } from "react";
import "./App.css";
import { Chat } from "./components/Chat.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import Pusher from "pusher-js";
import axios from "./api/axios";

function App() {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    var pusher = new Pusher("82c82ecc59a3b12b823f", {
      cluster: "ap2",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessage([...messages, newMessage]);
    });

    return () => {
      channel.unsubscribe();
      channel.unbind_all();
    };
  }, [messages]);

  useEffect(() => {
    axios.get("/message/sync").then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <div className="app">
      <div className="chat__container">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
