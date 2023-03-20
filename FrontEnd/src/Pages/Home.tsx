import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from './Navbar/Header';
import './home.scss';
export const Home = () => {
  return (
    <>
      <div className='home d-flex flex-column align-items-center'>
          <div>
            <Header/>
          </div>
          <div className='book-offer-card mt-5 d-flex align-items-center justify-content-center' >
          <div className='inner-card d-flex flex-column align-items-between justify-content-between'>
              <div className='mt-0 card-header p-0'><h2>Hey John!</h2></div>
              <div className="mt-2 card-inner-container d-flex  flex-wrap align-items-center justify-content-between">
                <div className="book-ride d-flex align-items-center justify-content-center" ><h3>  <Link to="/bookride" style={{color:"white" , textDecoration:"none"}}>Book a Ride </Link></h3></div>
                <div className='offer-ride d-flex align-items-center justify-content-center'><h3> <Link to='/offerride' style={{color:"white" , textDecoration:"none"}}>Offer Ride </Link></h3></div>
              </div>
          </div>
          </div>
      </div>
    </>
    
  )
}