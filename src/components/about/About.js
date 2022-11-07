import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './about.css'
import selfImage from '../../assets/me.png'
import spotifyLogo from '../../assets/spotify.svg'
import Accordion from '../accordion/Accordion'
import AccordionItem from '../accordion/AccordionItem'


export default function About() {
  return (
    <div>
        <Header/>
        <div id='bioContainer'>
            <img 
                src={selfImage} 
                alt='a landscape headshot of lupe paniagua wearing a face-mask and holding a dog in a small grey pouch'/>
            <div id='tldrBlock'>
                <h1>
                    hi, nice to meet ya 👋
                </h1>
                <h4>
                    tldr: music enthusiast, loves doggos, comic-book nerd, extremely curious hooman, and self-taught in design
                </h4>
            </div>
            <div id='spotifyContainer'>
                <img 
                    src={spotifyLogo}
                    alt='spotify is a music streaming platform and this is the green circle logo with 3 stripes cut out of the center' />
                <div>
                    <div id='nowPlayingContainer'>
                        <div id='playingAnimation'>
                            <div className='playingIndicatorLine' id='first'></div>
                            <div className='playingIndicatorLine' id='second'></div>
                            <div className='playingIndicatorLine' id='third'></div>
                        </div>
                        <p> currently playing </p>
                    </div>
                    <h4> Mat Kerekes </h4>
                    <h5> Honky Tonk </h5>
                </div>
            </div>
            <div id='infoBlock'>
                <h3>
                    let's get deep...
                </h3>
                <p className='largeBody'>
                    Born in Southern California, raised evenly between California & Texas, and now living in the Bay Area. 
                    I’m a self-taught designer who’s interested in solving complex problems by humanizing tech & 
                    <span className='bolded'> exploring the intersection between psychology, technology, and design</span>. 
                    Right now, I’m a senior studying Cognitive Science & Design Innovation at UC Berkeley. 
                    <br></br>
                    <br></br>
                    I hope to 
                    <span className='bolded'> design & develop for impact </span> 
                    — making meaningful, diverse products and experiences that improve people’s 
                    lives. That includes using my own personal background as a Hispanic, first-gen, woman in STEM and personal values 
                    to guide my open-minded, empathetic approach to designing. 
                    <br></br>
                    <br></br>
                    Additionally, I’ve always been curious to understand how 
                    things (and people) work, and why they work that way. This curiosity has driven me to explore ways to make technology 
                    more accessible, inclusive, equitable, and empowering to everyone. With this, I’m committed to building for causes that 
                    I’m passionate about as well as promoting diversity within tech. 
                    <br></br>
                    <br></br>
                    When I’m not designing, you can find me with my dog, making monthly 
                    <span> </span>
                    <span> 
                        <a href='' target='_blank'>spotify playlists</a> 
                    </span>, taking blurry 
                    <span> </span>
                    <span>
                        <a href='' target='_blank'>photos</a>
                    </span>, and 
                    pretending to be an interior designer in Animal Crossing.
                    <br></br>
                    <br></br>
                    <span className='bolded'>
                        Feel free to reach out if you would like to discuss anything further, ask me questions, or simply drop in and 
                        say hello — I’m happy to chat!
                    </span>
                </p>
            </div>
            <h2> thanks for stopping by ✨</h2>
        </div>
        <Footer/>
    </div>
  )
}
