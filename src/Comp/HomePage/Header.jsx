import React from 'react'
import "./style.css";
import useData  from "../../assets/store.js";

export default function Header() {
  const {
    input,
    setInput,}=useData();

  return (
    <div id='header-cont'>
    <div id='title'>Your chats</div>
    <input id='search' placeholder='🔍Search'
     value={input}
     onChange={(e)=>{
      setInput(e.target.value)
     }} >
  
    </input>
  
    </div>
  )
}
