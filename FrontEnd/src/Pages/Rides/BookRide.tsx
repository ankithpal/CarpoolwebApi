import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import './bookride.scss';
import { TimeStamp } from '../../Components/TimeStamp';
import { MatchingCard } from '../../Components/MatchingCard';
import { Header } from '../Navbar/Header';
export const BookRide = () => {
  const navigate = useNavigate();
  const someEventHandler = () => {
      navigate('/offerride');
  }
  return (
    <div className='bookride-container'>    
    <div className='book-ride-header d-flex align-items-center justify-content-center'>
        <Header/>
    </div>
    <div className="bookride d-flex flex-wrap">
       <div className="bookform d-flex align-items-center justify-content-center">
        <div className="bookform-container d-flex flex-column align-items-center">
          <div className="toggle-container d-flex align-items-end">
              <div className='toggle-container-text lh-1'>
                <h2>Book a Ride</h2>
                <p>we get you the matches asap !</p>
              </div>
              <div className="toggle-btn d-flex justify-content-center" onClick={()=>someEventHandler()}>
                <div className="toggle-btn-outer mt-3 d-flex align-items-center justify-content-end violet-shade-bg pe-1" ><div className="toggle-btn-inner"></div></div>
                
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
              <div className="first-circle" ></div>
              <div className="second-circle" ></div>
              <div className="second-circle" ></div>
              <div className="second-circle"></div>
              <div className="second-circle" ></div>
              <i className="fa-solid fa-location-dot violet-shade-c"></i>
            </div>
          </div>
          <div className="time-container ">
            <TimeStamp/>
          </div>
          <div className="button-container mt-4">
               <button type="button" className="btn btn-primary ">Submit</button>
          </div>
        </div>
       </div>
       <div className="matches-container">
         <div className="m-container-header d-flex align-items-center"><h3>Your Matches</h3></div>
         <div className="card-container d-flex flex-wrap">
          <MatchingCard/>
          <MatchingCard/>
         </div>
       </div>
    </div>
    </div>
  )
}