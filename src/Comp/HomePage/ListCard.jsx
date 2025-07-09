import React from 'react'
import useData from "../../assets/store.js";
import { Link } from "react-router-dom";

export default function ListCard({item}) {
  const {setKey,setInput} = useData();

  return (
    <>
    
    <Link to ={`/Chat?key=${item.Key}`} className='listCard-cont'
     onClick={()=>
     {setKey(item.Key),setInput("")
     }}>

        <div className='LeftSide'>
        <img src={`/pepoleImg/${item.Img}`}></img>
        <div>
            <span className='cardName'>{item.Name}</span>
            <span className='message'></span>
        </div>
        </div>
        <div className='rightSide'>
            <div>{item.Time}</div>
        </div>
    </Link>
    </>
  )
}
