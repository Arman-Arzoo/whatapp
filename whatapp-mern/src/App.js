import { useEffect } from "react";
import "./App.css";
import { Chat } from "./components/Chat.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import Pusher from "pusher-js";
import env from "dotenv";
env.config();
function App() {
  useEffect(() => {
    var pusher = new Pusher(process.env.PUSHERKEY, {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);
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
