import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './work.css'

import emocha from './emocha/emocha.png'
import bfi from './bfi/bfi.png'

export default function WorkItem() {

    const [imgSrc, setImgSrc] = useState('');
    const [workDesc, setWorkDesc] = useState('');
    const [workLink, setWorkLink] = useState('');
    const [workTitle, setWorkTitle] = useState('');
    const [workDate, setWorkDate] = useState('');
    const getData = () => {
      setImgSrc(imgSrc);
      setWorkDesc(workDesc);
      setWorkLink(workLink);
      setWorkTitle(workTitle);
      setWorkDate(workDate);
    }
    return (
    <div>
        <div className='itemContainer'>
            {imgData.map((item, index) => {
            return (
                <div id='itemContainer' key={index} onClick={() => getData()}>
                    <img src={item.imgSrc} /><div id='workInfo'>
                        <div id='labels'>
                            <span><p className='smallBody'>Product Design</p></span>
                            <span><p className='smallBody'>UI/UX Design</p></span>
                            <span><p className='smallBody'>Graphic Design Design</p></span>
                            <span><p className='smallBody'>Case Study</p></span>
                            <span><p className='smallBody'>Personal</p></span>
                        </div>
                        <Link to={item.workLink} style={{ textDecoration: "none" }}>
                            <h2 id='workTitle'>{item.workTitle}</h2>
                        </Link>
                        <p className='largeBody'> {item.workDesc}</p>
                        <p id='workDate'> {item.workDate}</p>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}


let imgData = [
    {
      id: 1,
      imgSrc: emocha,
      workLink:'/work/emocha',
      workTitle: "emocha Health: Product Design Internship ↗️",
      workDesc: "Conducted a design audit and established a functional design library system. Please note this work is under NDA.",
      workDate:'June - Aug 2022'
    },
    {
        id: 2,
        imgSrc: bfi,
        workLink:'/work/bfi',
        workTitle: "Berkeley Food Institute: UI Design Internship ↗️",
        workDesc: "I was leading the effort of a full-scale website overhaul that matched the new and refreshed mission. I helped refine the branding vision. ",
        workDate:'May - Aug 2022'
      
    },
    {
        id: 3,
        imgSrc: emocha,
        workLink:'/work/emocha',
        workTitle: "Summer '22 Product Design Internship ↗️",
        workDesc:" Conducted a design audit and established a functional design library system. Please note this work is under NDA.",
        workDate:'Jun 2021- Aug 2022'
      
    },
    {
        id: 4,
        imgSrc: emocha,
        workLink:'/work/emocha',
        workTitle: "Summer '22 Product Design Internship ↗️",
        workDesc:" Conducted a design audit and established a functional design library system. Please note this work is under NDA.",
        workDate:'Jun 2021- Aug 2022'
      
    },
    {
        id: 5,
        imgSrc: emocha,
        workLink:'/work/emocha',
        workTitle: "Summer '22 Product Design Internship ↗️",
        workDesc:" Conducted a design audit and established a functional design library system. Please note this work is under NDA.",
        workDate:'Jun 2021- Aug 2022'
      
    },
  ]