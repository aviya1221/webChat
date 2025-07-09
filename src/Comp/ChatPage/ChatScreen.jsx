import React, { useEffect } from "react";
import Chat from "./Chat";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";
import { useLocation } from "react-router-dom";
import useData from "../../assets/store.js";

export default function ChatScreen() {
  const {setKey}=useData()
  const loc=useLocation();
  const urlObj= new URLSearchParams(loc.search);

  useEffect(()=>{
      setKey(urlObj.get("key"));

  },[loc.search])

  return (
    <div className="warpper-cont">
      <div className="chatScreen">
        <Header ></Header>
        <Chat></Chat>
        <Footer></Footer>
      </div>
    </div>
  );
}
