import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './../work.css'
import workStudy from './work-study.png'

let workData = [
    {
      id: 1,
      imgSrc: workStudy,
      workLink:'https://www.notion.so/Work-Study-Reimagined-Website-62cae2b3e4aa4e63a7ce54c5b276749a',
      workTitle: "UC Berkeley's Work Study Website Reimagined ↗️",
      workDesc: "The work-study portal is an integral part of UCB student's experience. However, many students encounter issues while using it so I attempted to redesign the UI/UX and overall product for a more seamless journey.",
      workDate:'Feb - Apr 2021'
    }
]

export default function WorkStudy() {

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
                            <span><p className='smallBody'>Case Study</p></span>
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
