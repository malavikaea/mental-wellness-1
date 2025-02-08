
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth.js";
import Chatbot from "./components/Chatbot";
import Playlists from "./components/Playlists";
import "./App.css"; // Import CSS after other imports

function App() {
  return (
    <Router>
      <div className="container">
        <h1>🌿 Mental Wellness Chatbot</h1>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

