import "./App.css";
import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
