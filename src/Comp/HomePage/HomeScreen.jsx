import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./style.css"
import List from './List'

export default function HomeScreen() {
  return (
    <>
    <div id='homeScreen-cont'>
  <Header/>
  <List/>
  <Footer/>
  </div>
  </>
  )
}
