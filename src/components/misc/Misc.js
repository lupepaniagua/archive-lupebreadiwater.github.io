import React, {useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Gallery from './Gallery'
import './misc.css'

export default function Misc() {
  return (
    <div>
        <Header/>
        <div id='galleryBox'>
          <h1>
            featured graphic design collection
          </h1>
          <Gallery />
        </div>
        <Footer/>
    </div>
  )
}
