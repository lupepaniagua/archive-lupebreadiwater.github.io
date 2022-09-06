import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './../work.css'
import emocha from './emocha.png'

let workData = [
    {
      id: 1,
      imgSrc: emocha,
      workLink:'/work/emocha',
      workTitle: "emocha Health: Product Design Internship ↗️",
      workDesc: "I conducted a design audit and established a functional design library system. Here I have documented my internship reflections. Please also note that this work is under NDA.",
      workDate:'June - Aug 2022'
    }
]

export default function Emocha() {

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
                            <span><p className='smallBody'>Product Design</p></span>
                            <span><p className='smallBody'>UI/UX Design</p></span>
                            <span><p className='smallBody'>UX Research</p></span>
                        </div>
                        <Link to={item.workLink} style={{ textDecoration: "none" }}>
                            <h2 id='workTitle'>{item.workTitle}</h2>
                        </Link>
                        <p id='tbd' className='italicBody'> Case Study Coming Soon</p>
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
