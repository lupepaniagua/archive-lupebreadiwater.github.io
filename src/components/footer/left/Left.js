import React from 'react'
import './left.css'

export default function Left() {
  return (
    <div id='leftBox'>
        <h2 className='emphasized'>
            let's get in touch!
        </h2>
        <div id='contactRow'>
            <div className='socialsColumn'>
                <p>email</p>
                <p>twitter</p>
                <p>linkedin</p>
                <p>spotify</p>
            </div>
            <div className='socialsColumn'>
                <a href="mailto:lupepaniagua@berkeley.edu" target='_blank'>
                    <p className='bolded'>lupepaniagua@berkeley.edu</p>
                </a>
                <a href='https://twitter.com/lupebreadiwater' target='_blank'>
                    <p className='bolded'>@lupebreadiwater</p>
                </a>
                <a href='https://www.linkedin.com/in/lupepaniagua/' target='_blank'>
                    <p className='bolded'>@lupepaniagua</p>
                </a>
                <a href='https://open.spotify.com/user/its.lupee' target='_blank'>
                    <p className='bolded'>@its.lupee</p>
                </a>
            </div>
        </div>
    </div>
  )
}
