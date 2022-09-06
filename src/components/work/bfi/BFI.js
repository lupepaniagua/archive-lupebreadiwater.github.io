import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './../work.css'
import bfi from './bfi.png'

let workData = [
    {
      id: 1,
      imgSrc: bfi,
      workLink:'/work/bfi',
      workTitle: "Berkeley Food Institute: UI Design Internship ↗️",
      workDesc: "I led the effort of a full-scale website overhaul to match the new and revised mission statement. Started with refining BFI's branding and vision. Moved on with website architecture and the finally website UI design",
      workDate:'May - Aug 2022'
    }
]

export default function BFI() {

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
            {workData.map((item, index) => {
            return (
                <div id='itemContainer' key={index} onClick={() => getData()}>
                    <img src={item.imgSrc} /><div id='workInfo'>
                        <div id='labels'>
                            <span><p className='smallBody'>UI/UX Design</p></span>
                            <span><p className='smallBody'>Product Design</p></span>
                            <span><p className='smallBody'>Branding</p></span>
                            <span><p className='smallBody'>Internship</p></span>
                        </div>
                        <Link to={item.workLink} style={{ textDecoration: "none" }}>
                            <h2 id='workTitle'>{item.workTitle}</h2>
                        </Link>
                        <p id='tbd' className='italicBody'> Case Study Coming Soon</p>
                        <p className='largeBody'> {item.workDesc}</p>
                        <p id='workDate'> {item.workDate} </p>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

