import React, {useState} from 'react'
import plusIcon from '../../assets/plusIcon.svg'
import minusIcon from '../../assets/minusIcon.svg'
import './accordion.css'


export default function AccordionItem() {

  const [visibility, setVisibility] = useState(false);
  const toggle = (o) => {
    setVisibility(!visibility);
  };



  return (
    <div>
      {accordionData.map((item, index) => (
        <div>
          <div className='itemHeader' onClick={toggle}> 
            <h3>{item.title}</h3>
            <span>
              <button>
                <img src={plusIcon}/>
              </button>
            </span>
          </div>
          <div id='itemContent' className={visibility? 'accordion-active' : '' }>
            <p>{item.content}</p>
          </div>
        </div> 
      ))}
    </div>
  );
};
  

const accordionData = [ 
  {
    title: 'experience',
    content: "I'll tell you how I feel about school, Jerry. It's a waste of time. Bunch of people runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin'. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue. They'll just fall right out of my ass! I've done this too many times! Let’s be post-apocalyptic scavengerrrrsss! I'm Mr. Crowbar, and here is my friend, who is also a crowbar!"
  },
  {
    title: "what i'm watching",
    content: "I'll tell you how I feel about school, Jerry. It's a waste of time. Bunch of people runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin'. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue. They'll just fall right out of my ass! I've done this too many times! Let’s be post-apocalyptic scavengerrrrsss! I'm Mr. Crowbar, and here is my friend, who is also a crowbar!",
  },
  {
    title: 'recent song recommendations',
    content: "I'll tell you how I feel about school, Jerry. It's a waste of time. Bunch of people runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin'. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue. They'll just fall right out of my ass! I've done this too many times! Let’s be post-apocalyptic scavengerrrrsss! I'm Mr. Crowbar, and here is my friend, who is also a crowbar!",
  },

];