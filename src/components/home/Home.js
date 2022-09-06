import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './home.css'


export default function Home() {
  return (
    <div>
        <Header />
        <div id='landingContainer'>
          <h1>
              hello there, i’m lupe ✨ an empathy-driven 
              <span> </span> 
              <span className='blueText'>
                  multidisciplinary designer 
              </span> focused on creating impactful, inclusive, and thoughful user experiences. 
          </h1>
          <div id='roundGreyBox'>
              <p className='largeBody'>
                  📍 previously pushed pixels 
                  <span> </span>
                  <span className='bolded'>@emocha Health</span> and 
                  <span> </span>
                  <span className='bolded'>@Berkeley Food Institute</span> 
              </p>
          </div>
        </div>
        <Footer />
    </div>
  )
}
