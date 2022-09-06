import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './work.css'
import Emocha from './emocha/Emocha'
import BFI from './bfi/BFI'
import WorkStudy from './work-study/WorkStudy'
import Sleep from './sleep-deprivation/Sleep'


export default function Work() {
  return (
    <div>
        <Header/>
        <div className='workContainer'>
          <h1> featured work</h1>
          <Emocha/>
          <BFI/>
        </div>
        <div className='workContainer'>
          <h1> personal projects</h1>
          <WorkStudy/>
          <Sleep/>
        </div>
        <Footer/>
    </div>
  )
}

