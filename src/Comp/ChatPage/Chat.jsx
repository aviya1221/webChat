import React, { useEffect, useRef } from "react";
import useData from "../../assets/store.js";

export default function Chat() {
  const {
    messageList,
    setMessageList,
    key,
    originalData,
    scrollTriger,setProfile,updateSeen,setScrollTriger
  } = useData();

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem(key));
    if (arr && arr.length > 0) setMessageList(arr);
    else setMessageList([]);
  }, [originalData]);

  const screenRef = useRef(null);

  useEffect(() => {
    if (screenRef.current) {
      // טריק קטן ל-iOS: לגרום לרינדור מחדש לפני scrollTo
      screenRef.current.style.overflow = 'hidden';
      setTimeout(() => {
        screenRef.current.style.overflow = 'auto';
        screenRef.current.scrollTo({
          top: screenRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    }
  }, [scrollTriger, messageList]);

  useEffect(() => {
    setTimeout(() => {
      if (screenRef) {
        screenRef.current.scrollTo({
          top: screenRef.current.scrollHeight,
          behavior: "auto",
        });
      }
    }, 0);
  }, [screenRef, originalData]);

  
  const messageListRef = useRef(messageList);
    const responseTimeoutRef = useRef(null);

useEffect(() => {
  messageListRef.current = messageList;
}, [messageList]);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (!lastMessage||lastMessage.sender !=="user") return;
   
    if (responseTimeoutRef.current) {
      clearTimeout(responseTimeoutRef.current);
    }

    responseTimeoutRef.current =setTimeout(() => {
        const currentTime = new Date().toLocaleTimeString("default", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        const serverMessage = {
          userMessage: "Simulate user response",
          time: currentTime,
          sender: "server",
        };
        setProfile(key);
        updateSeen(key,currentTime);
        
        const temp = [...messageListRef.current, serverMessage];
        setMessageList(temp);
        setScrollTriger((prev) => !prev);
        localStorage.setItem(key, JSON.stringify(temp));
      }, 4000);
    }, [messageList]
  )

  return (
    <>
      <div className="chat-cont" ref={screenRef}>
        {messageList.map((message, index) => (
          <div key={index} className={message.sender==="user"?"userMessage-cont"
          :"serverMessage-cont"}>

            <div>{message.userMessage}</div>
            <div className="messageTime-cont">{message.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}
