import React from 'react'
import "./style.css";
import contacts from "../../assets/footerImg/contacts.webp"
import setting from "../../assets/footerImg/setting.webp"
import message from "../../assets/footerImg/message.webp"
import phone from "../../assets/footerImg/phone.webp"

export default function Footer() {
  return (
    <>
    <div id='foot-cont'>
        <img src={phone} alt='calls'></img>
        <img src={message} alt='chats'></img>
        <img src={contacts} alt='contacts'></img>
        <img src={setting} alt='setting'></img>
    </div>
    
    </>
  )
}
