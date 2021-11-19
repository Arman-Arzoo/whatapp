import { useEffect, useState } from "react";
import "./App.css";
import { Chat } from "./components/Chat.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import Pusher from "pusher-js";
// import env from "dotenv";
// env.config();

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    var pusher = new Pusher("82c82ecc59a3b12b823f", {
      cluster: "ap2",
    });
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      // alert(JSON.stringify(data));
      setMessage(JSON.stringify(data));
    });
  }, []);

  console.log(message);
  return (
    <div className="app">
      <div className="chat__container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
