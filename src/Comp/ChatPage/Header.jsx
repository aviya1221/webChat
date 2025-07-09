import React, { useEffect } from "react";
import useData from "../../assets/store.js";
import back from "../../assets/headChatImg/leftArrow.webp";
import phone from "../../assets/headChatImg/phone.webp";
import vidoe from "../../assets/headChatImg/vidoe.webp";
import menu from "../../assets/headChatImg/menu.webp";
import { Link } from "react-router-dom";


export default function Header() {
const {key,setProfile
  ,profile,setMessage
  ,originalData,clearMessageList}=useData();

useEffect(() => {
  if (originalData.length > 0 && key) {
    setProfile(key);
  }
}, [key, originalData]);

  
  return (
    <>
    {profile&&(
      <div className="header-cont">
        <div className="leftHead-cont">
          <div className="profile-cont">
            <Link to={"/"}>
            <img onClick={()=>{clearMessageList([]),setMessage("")}}
             src={back}></img>
            </Link>
            <img id="profile" src={`/pepoleImg/${profile.Img}`}></img>
          </div>
          <div className="nameHead-cont">
            <p>{profile.Name}</p>
            <p>{profile.Time}</p>
          </div>
        </div>

        <div className="rightHead-cont">
          <img src={phone}></img>
          <img src={vidoe}></img>
          <img src={menu}></img>
        </div>
      </div>
    )}
    </>
  );
}
