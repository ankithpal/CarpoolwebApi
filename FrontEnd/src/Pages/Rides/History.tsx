import React from 'react'
import { Header } from '../Navbar/Header'
import './history.scss'
import { MatchingCard } from '../../Components/MatchingCard'

export const History = () => {
  return (
    <div className='bookride-container'>    
    <div className='book-ride-header d-flex align-items-center justify-content-center'>
        <Header/>
    </div>
    <div className="history-container d-flex flex-wrap">
        <div className="bookedride d-flex  align-item-center justify-content-center">
            <div className="bookride-inner mt-3 ml-3">
              <div className="booked-ride-header offered-ride-header d-flex align-items-center justify-content-center">Booked Rides</div>
               <div className="cards-container mt-4">
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
              </div>
            </div>
        </div>
        <div className="bookedride d-flex align-item-center justify-content-center">
            <div className="bookride-inner mt-3 ml-3">
              <div className="offered-ride-header d-flex align-items-center justify-content-center">Offered Rides</div>
               <div className="cards-container d-flex flex-column mt-3">
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
                <MatchingCard/>
              </div>
            </div>
        </div>
        <div className="offeredride"></div>
    </div>
    </div>
  )
}