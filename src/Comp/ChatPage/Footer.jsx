import React from "react";
import camera from "../../assets/headChatImg/camera.webp";
import link from "../../assets/headChatImg/link.webp";
import send from "../../assets/headChatImg/send.webp";
import useData from "../../assets/store.js";
import { useRef } from "react";

export default function Footer() {
  const {
    message,
    messageList,
    setMessage,
    setMessageList,
    profile,
    setScrollTriger,
  } = useData();
  
  const inputRef = useRef();

  const handleSend = () => {
    if (message.trim() !== "") {
      const prev = localStorage.getItem(profile.Key);
      const savedMessage = prev ? JSON.parse(prev) : [];
      const messageTime = new Date().toLocaleTimeString("default", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
      savedMessage.push({ userMessage: `${message}`, time: `${messageTime}`,sender:"user" });
      localStorage.setItem(`${profile.Key}`, JSON.stringify(savedMessage));
      const temp = savedMessage.map((item) => ({
        userMessage: `${item.userMessage}`,
        time: `${item.time}`,
        sender: item.sender
      }));
      console.log(temp);
      setMessage("");
      setMessageList(temp);
      console.log(messageList);
      setScrollTriger(prev => !prev);
    } else inputRef.current.focus();
  }
  
  ;

  return (
    <div className="footer-cont">
      <div className="leftFoot-cont">
        <img id="camera" src={camera}></img>
        <input
          placeholder="Write your message here..."
          ref={inputRef}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        ></input>
      </div>
      <div className="rightFoot-cont">
        <img id="link" src={link}></img>
        <img src={send} onClick={handleSend}></img>
      </div>
    </div>
  );
}
