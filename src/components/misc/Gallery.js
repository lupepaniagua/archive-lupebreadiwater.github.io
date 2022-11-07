import React, {useState} from 'react'
import closeIcon from '../../assets/closeIcon.svg'
import './misc.css'

/* import design posters here*/
import item5 from '../../assets/designs/beauty-in-tragedy.png'
import item24 from '../../assets/designs/art-of-living.png'
import item3 from '../../assets/designs/dont-look.png'
import item6 from '../../assets/designs/harrys-house.png'
import item4 from '../../assets/designs/glass-world.png'
import item11 from '../../assets/designs/neighbourhood.png'
import item7 from '../../assets/designs/black-eyed-peas.png'
import item14 from '../../assets/designs/citizen-concert.png'
import item27 from '../../assets/designs/citizen-gradient.png'
import item26 from '../../assets/designs/dull-knife.png'
import item10 from '../../assets/designs/famous-actor.png'
import item13 from '../../assets/designs/identity-crisis.png'
import item21 from '../../assets/designs/its-okay.png'
import item28 from '../../assets/designs/jellyfish.png'
import item9 from '../../assets/designs/mat-kerekes.png'
import item16 from '../../assets/designs/nova-album.png'
import item17 from '../../assets/designs/turnover.png'
import item18 from '../../assets/designs/waldo.png'
import item20 from '../../assets/designs/what-it-is.png'
import item19 from '../../assets/designs/disco.png'
import item12 from '../../assets/designs/copacetic.png'
import item22 from '../../assets/designs/dont-love-you.png'
import item23 from '../../assets/designs/emotional-sickness.png'
import item2 from '../../assets/designs/human.png'
import item25 from '../../assets/designs/layers.png'
import item8 from '../../assets/designs/when-together.png'
import item15 from '../../assets/designs/myself-in-the-way.png'
import item1 from '../../assets/designs/mktour.png'



export default function Gallery() {

    /* setting up the modal properties */
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [imgText, setImgText] = useState('');
    const getImg = (imgSrc, imgText) => {
      setTempImgSrc(imgSrc);
      setImgText(imgText);
      setModal(true);
    }
    return (
    <div>
        <div className={modal? 'modal open': 'modal'}>
            <button onClick={() => setModal(false)}>
                <img src= {closeIcon} alt=" "/>
            </button>
            <img src={tempImgSrc} alt=" "/>
            <p className='largeBody'>{imgText}</p>
        </div>
        <div className='galleryContainer'>
            {imgData.map((item, index) => {
            return (
                <div className='images' key={index} onClick={()=> getImg(item.imgSrc, item.imgText)}>
                <img src={item.imgSrc} alt=" "/>
                <span hidden='hidden'> {item.imgText}</span>
                </div>
                )
            })}
        </div>
    </div>
  )
}

/* design posters data*/
let imgData = [
    {
      id: 1,
      imgSrc: item1,
      imgText: "Concept tour poster for Mat Kerekes' Fall 2022 US Tour",
    },
    {
      id: 2,
      imgSrc: item2,
      imgText: "Concept poster inspired by The 1975's 'Human Too.'",
    },
    {
      id: 3,
      imgSrc: item3,
      imgText: "Don't Look, 2022. (@lucidlu.psd on IG)",
    },
    {
      id: 4,
      imgSrc: item4,
      imgText: "Concept poster inspired by Citizen's 'Glass World.'",
    },
    {
      id: 5,
      imgSrc: item5,
      imgText: "Concept poster inspired by Citizen's 'Edge of the World.'",
    },
    {
      id: 6,
      imgSrc: item6,
      imgText: "Concept poster inspired by Harry Styles' 'Late Night Talking.'",
    },
    {
      id: 7,
      imgSrc: item7,
      imgText: "Concept poster inspired by The Black Eyed Peas.",
    },
    {
      id: 8,
      imgSrc: item8,
      imgText: "Concept poster inspired by The 1975's 'When We Are Together.'",
    },
    {
      id: 9,
      imgSrc: item9,
      imgText: 'Concept poster of Mat Kerekes, 2022.',
    },
    {
      id: 10,
      imgSrc: item10,
      imgText: "Concept poster inspired by Mat Kereke's 'Look, I'm a Famous Actor.'",
    },
    {
      id: 11,
      imgSrc: item11,
      imgText: "Concept poster inspired by The Neighbourhood's 'You Get Me So High.'",
    },
    {
      id: 12,
      imgSrc: item12,
      imgText: "Concept poster inspired by Knuckle Puck's 'Untitled.'",
    },
    {
      id: 13,
      imgSrc: item13,
      imgText: 'Ruminating Thoughts, 2022. (@lucidlu.psd on IG)',
    },
    {
      id: 14,
      imgSrc: item14,
      imgText: "Concept poster inspired by Citizen's LIYGW Tour. I saw them on Nov 24, 2021. Pictures taken by me.",
    },
    {
      id: 15,
      imgSrc: item15,
      imgText: "Concept poster inspired by Turnover's 'Myself in the Way.'",


    },
    {
      id: 16,
      imgSrc: item16,
      imgText: "Concept poster inspired by Mat Kereke's album, Nova.",
    },
    {
      id: 17,
      imgSrc: item17,
      imgText: "Concept faux receipt inspired by Turnover's album, Good Nature.",
    },
    {
      id: 18,
      imgSrc: item18,
      imgText: "Where's Waldo, 2022. (@lucidlu.psd on IG)",
    },
    {
      id: 19,
      imgSrc: item19,
      imgText: 'Funk It Up, 2022. (@lucidlu.psd on IG)',
    },
    {
      id: 20,
      imgSrc: item20,
      imgText: 'It Is What It Is, 2021. (@lucidlu.psd on IG)',
    },
    {
      id: 21,
      imgSrc: item21,
      imgText: "It's Okay, 2022. (@lucidlu.psd on IG)",
    },
    {
      id: 22,
      imgSrc: item22,
      imgText: "Concept poster inspired by Citizen's 'I Don't Love You.'",
    },
    {
      id: 23,
      imgSrc: item23,
      imgText: "Concept poster inspired by Phoebe Bridgers' 'Emotional Motion Sickness.'",
    },
    {
      id: 24,
      imgSrc: item24,
      imgText: "Concept poster inspired by Mat Kereke's 'The Art of Living.'",
    },
    {
      id: 25,
      imgSrc: item25,
      imgText: 'Life Has Too Many Layers, 2022. (@lucidlu.psd on IG)',
    },
    {
      id: 26,
      imgSrc: item26,
      imgText: 'Dull Knife, 2021. (@lucidlu.psd on IG)',
    },
    {
      id: 27,
      imgSrc: item27,
      imgText: 'Concept poster of Citizen, 2021. Type by me.',
    },
    {
      id: 28,
      imgSrc: item28,
      imgText: 'Jellyfish, 2022. (@lucidlu.psd on IG)',
    },
  ]