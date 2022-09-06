import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './../work.css'
import sleep from './sleep.png'

let workData = [
    {
      id: 1,
      imgSrc: sleep,
      workLink:'https://lupepaniagua.notion.site/Sleep-Deprivation-Website-fc108dada34b48399343e62aae7b1b24',
      workTitle: "Sleep Deprivation Website ↗️",
      workDesc: "I designed + developed a website and a flyer for my Psychology of Sleep class project. It contains information over sleep derpivation and its effects on the body + brain.",
      workDate:'Nov 15 - Nov 22, 2021'
    }
]

export default function Sleep() {

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
                            <span><p className='smallBody'>Web Development</p></span>
                            <span><p className='smallBody'>UI Design</p></span>
                            <span><p className='smallBody'>Graphic Design</p></span>
                        </div>
                        <a href={item.workLink} target='_blank' style={{ textDecoration: "none" }}>
                            <h2 id='workTitle'>{item.workTitle}</h2>
                        </a>
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
