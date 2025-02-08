//import React from "react"; // ✅ Add this line
import { useParams, useNavigate } from "react-router-dom";

function Chatbot() {
  const { mood } = useParams();
  const navigate = useNavigate();

  return (
    <div className="chatbot">
      <h2>Chatbot</h2>
      <p>Based on your mood ({mood}), let’s talk!</p>
      <div className="chatbox">
        <p>🤖: Hello! How can I help you today?</p>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅️ Go Back
      </button>
    </div>
  );
}

export default Chatbot; // ✅ Ensure the component is exported
