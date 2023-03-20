import React, { useEffect } from 'react'
import './bookride.scss';
import { TimeStamp } from '../../Components/TimeStamp';
import { MatchingCard } from '../../Components/MatchingCard';
import { Header } from '../Navbar/Header';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
export const OfferRide = () => {

  let [showStops , setShowStops]  = useState(false);
  let [selectedStop , setSelectedStop] = useState('');
  const navigate = useNavigate();
  const redirectTobookRide = () => {
      navigate('/bookride');
  }
  const moveToNextPage = ()=>{
      setShowStops(true);
  }
  
  return (
    <div className='bookride-container '>    
    <div className="book-ride-header d-flex align-items-center justify-content-center">
        <Header/>
    </div>
    <div className="bookride d-flex flex-wrap">
       <div className="bookform d-flex align-items-center justify-content-center">
        <div className="bookform-container d-flex flex-column align-items-center">
          <div className="toggle-container d-flex align-items-end">
              <div className='toggle-container-text lh-1'>
                <h2>Offer a Ride</h2>
                <p>we get you the matches asap !</p>
              </div>
              <div className="toggle-btn d-flex justify-content-center">
                <div className="toggle-btn-outer mt-3 d-flex align-items-center justify-content-start ps-1 orange-shade-bg" onClick={e=>redirectTobookRide()} ><div className="toggle-btn-inner orange-shade-bg"></div></div>
                
              </div>
          </div>
          <div className="input-feild-container d-flex">
            <div className="input-feild ">
            <div className="form-floating mb-0">
              <input type="text" className="form-control border-0 border-bottom" id="from" placeholder="name@example.com"/>
              <label htmlFor="from">From</label>
            </div>
            <div className="form-floating">
              <input type="text" className="form-control border-0 border-bottom" id="to" placeholder="Password"/>
              <label htmlFor="to" className=''>To</label>
            </div>
            <div className="form-floating ">
              <input type="date" className="form-control border-0 border-bottom fs-6 pl-0" id="date" placeholder="dd/mm/yy"/>
              <label htmlFor="date" className='pl-0'>Date</label>
            </div>
            </div>
            <div className="progress-bar d-flex align-items-center justify-content-between">
              <div className="first-circle"></div>
              <div className="second-circle" ></div>
              <div className="second-circle"></div>
              <div className="second-circle"></div>
              <div className="second-circle"></div>
              <i className="fa-solid fa-location-dot violet-shade-c" ></i>
            </div>
          </div>
          <div className="time-container">
            <TimeStamp/>
          </div>
          <div className="button-container next-button mt-4 d-flex align-items-end justify-content-end" onClick={moveToNextPage}>
               <div className ="button-container-next" >Next</div>
               <i className="fa-solid fa-angles-right d-flex align-item-center mt-1" ></i>
          </div>
        </div>
       </div>
       {showStops && 
        <div className="bookform d-flex align-items-center justify-content-center">
          <div className="bookform-container d-flex flex-column align-items-center">
            <div className="toggle-container d-flex align-items-end">
                <div className='toggle-container-text lh-1'>
                  <h2>Offer a Ride</h2>
                  <p>we get you the matches asap !</p>
                </div>
                  <div className="toggle-btn d-flex justify-content-center">
                    <div className="toggle-btn-outer mt-3 d-flex align-items-center justify-content-end orange-shade-bg"><div className="toggle-btn-inner"></div></div>
                  </div>
            </div>
            <div className="input-feild-container">
              <div className="input-feild">
              <div className="form-floating mb-0">
                <input type="text" className="form-control border-0 border-bottom" id="from" placeholder="name@example.com"/>
                <label htmlFor="from">Stop 1</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control border-0 border-bottom" id="to" placeholder="Password"/>
                <label htmlFor="to" className=''>Stop 2</label>
              </div>
              <div className="form-floating ">
                <input type="text" className="form-control border-0 border-bottom fs-6 pl-0" id="date" placeholder="dd/mm/yy"/>
                <label htmlFor="date" className='pl-0'>Stop 3</label>
              </div>
              </div>
              <div className="progress-bar d-flex align-items-center justify-content-between" style={{height:"80%"}}>
                <div className="first-circle" ></div>
                <div className="second-circle" ></div>
                <div className="second-circle" ></div>
                <div className="second-circle" ></div>
                <div className="second-circle"></div>
                <div className="second-circle"></div>
                <div className="second-circle"></div>
                <div className="second-circle"></div>
                <i className="fa-solid fa-location-dot violet-shade-c" ></i>
              </div>
            </div>
            <div className="time-container d-flex">
                <div className="available-seat mt-2">
                <label>Available Seat</label>
                  <div className="total-seats d-flex justify-content-between mt-2">
                      <div className={`seats d-flex align-items-center justify-content-center ${selectedStop == '1' ? 'selected-stop':''}`} onClick={e=>{e.preventDefault(); setSelectedStop('1');}}>1</div>
                      <div className={`seats d-flex align-items-center justify-content-center ${selectedStop == '2' ? 'selected-stop':''}`} onClick={e=>{e.preventDefault(); setSelectedStop('2');}}>2</div>
                      <div className={`seats d-flex align-items-center justify-content-center ${selectedStop == '3' ? 'selected-stop':''}`} onClick={e=>{e.preventDefault(); setSelectedStop('3');}}>3</div>
                  </div>
                  </div>
                <div className="total-price mt-2 d-flex flex-column"> 
                <label >Price</label>
                <div className=" d-flex">
                    <input type="text" className='border-0 w-50 h-50 mt-3 price-input' placeholder='180$'/>
                    {/* <p>$</p> */}
                </div>
                </div>
            </div>
            <div className="button-container mt-4">
                <button type="button" className="btn btn-primary ">Submit</button>
            </div>
          </div>
        </div>
       }
    </div>
    </div>
  )
}


