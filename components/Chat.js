import React, { useState } from 'react';
import styles from './Chat.module.css';

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const addMessage = (message, inputText) => {
      setMessages([...messages, "Human: " + inputText, "AI: " + message]);
    };
async function onSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.message;
    const text = input.value;
    input.value = "";
    try {
      /*const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }*/
      //Comment the actual api for not wasting tokens  
      //addMessage(data.result, text);
      addMessage("dummy response", text);
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  } 
  
return (
<div className={styles.chatContainer}>
  <div className={styles.chatMessages}>
  {messages.map((message, index) => (
  <div key={index}>{message}</div>
  ))}
  </div>
  <form className={styles.chatForm} onSubmit={onSubmit}>
  <input type="text" placeholder="Enter your message"  name="message"  />
  <button type="submit">Send</button>
  </form>
</div>
);
};

export default Chat;
