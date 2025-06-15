
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.css";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction:
    "The chatbot should be friendly, interactive, and supportive. Use emojis and ask open-ended questions.",
});

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const chatSession = model.startChat({
        history: [{ role: "user", parts: [{ text: userInput }] }],
      });

      const result = await chatSession.sendMessage(userInput);
      const botResponse = result.response.text();

      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error with AI API:", error);
      setMessages([...newMessages, { sender: "bot", text: "Oops! Something went wrong. 😞" }]);
    }
  };

  return (
    <div className="chatbot-container">
      <h2></h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
              {msg.sender === "user" ? "👀" : "🤖"} {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>✔️</button>
      </div>
    </div>
  );
}

export default Chatbot;
