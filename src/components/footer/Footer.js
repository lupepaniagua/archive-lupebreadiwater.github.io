import React from 'react'
import "./footer.css"
import Left from './left/Left'
import Right from './right/Right'

export default function Footer() {
  return (
    <div id='boxContainer'>
        <div id='footerBoxes'>
            <Left />
            <Right />
        </div>
    </div>
  )
}
