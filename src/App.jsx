//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // ✅ Correct import
import Chatbot from "./components/Chatbot"; // ✅ Correct import
import Playlists from "./components/Playlists"; // ✅ Correct import
import "./styles.css"; // Ensure your styles file exists

function App() {
  return (
    <Router>
      <div className="container">
        <h1>🌿 Mental Wellness App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot/:mood" element={<Chatbot />} />

          <Route path="/playlists/:mood" element={<Playlists />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
