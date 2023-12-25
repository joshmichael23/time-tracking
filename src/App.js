import logo from './logo.svg';
import userpic from './images/image-jeremy.png';
import ellipsis from './images/icon-ellipsis.svg';
import data from './data.json';
import React, { useEffect, useState } from "react";
import './style.css';

function App() {

  const [active, setActive] = useState('');
  return (
    <div onLoad={()=>setActive(active => 'weekly')} className="App">

        
      <div className='wrapper'>

        <div className='card-containers'>
          <div className='card card-main'>
            <div className='card-top'>
                  <img src={userpic}></img>
                  <h1><span>Report for</span> Jeremy Robson</h1>
            </div>
            <div className='card-content'>
                <a onClick={() => setActive(active => 'daily')} className={active=='daily'? 'active' : ''}>Daily</a>
                <a onClick={() => setActive(active => 'weekly')} className={active=='daily'? 'active' : ''}>Weekly</a>
                <a onClick={() => setActive(active => 'monthly')} className={active=='daily'? 'active' : ''}>Monthly</a>
            </div>

          </div>


          {
            data.map((answer, i) => {     
              return(
              <div className={'card ' + answer.title.toString().toLowerCase()}>
                <div className='card-content'>
                  <div className='card-content-top'>
                    <p>{answer.title}</p>
                    <button><img src={ellipsis}></img></button>
                  </div>
                  <div className='card-content-bottom'>
                    <div className={active=="daily"? 'daily show' : 'daily'}>
                      <h2>{answer.timeframes.daily.current}hrs</h2>
                      <p>Yesterday - {answer.timeframes.daily.previous}hrs</p>
                    </div>

                    <div className={active=="weekly"? 'weekly show' : 'weekly'}>
                      <h2>{answer.timeframes.weekly.current}hrs</h2>
                      <p>Last Week - {answer.timeframes.weekly.previous}hrs</p>
                    </div>

                    <div className={active=="monthly"? 'monthly show' : 'monthly' }>
                      <h2>{answer.timeframes.monthly.current}hrs</h2>
                      <p>Last Month - {answer.timeframes.monthly.previous}hrs</p>
                    </div>
                  
                  
                  </div>
                </div>
              </div>);

            })
          
          }
          
        </div>

      </div>
    </div>
  );
}

export default App;
