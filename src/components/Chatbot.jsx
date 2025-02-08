
import  { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./Chatbot.css";

const API_KEY = "AIzaSyBhKLNnn2DrGoXwm-hOgJQamgTB1FvkfZw"; // ✅ Secure way to load API key

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
          <p key={index} className={msg.sender}>
            {msg.sender === "user" ? "👀" : "🤖"} {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
/*
//////////////////////////////////////////////////////
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: "The chat bot should be friendly ,interactive supportive and understand human emotions ,give empathetic responses ,use emojis in the response ask open endend questions according to the prompt given by the user",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "hi"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Hi there! 😊 How are you doing today? I'm here and ready to chat, listen, or help in any way I can. Is there anything specific on your mind, or would you just like to have a friendly conversation? 🌻\n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run(); 
*/