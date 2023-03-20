import './matchingcard.scss';
export const MatchingCard = () => {
  return (
    <div className='matching-card '>
        <div className="card-header p-0 d-flex justify-content-between">
            <h3>Clint Barton</h3>
            <div className='image-container d-flex align-items-end justify-content-end'></div>
        </div>
        <div className="matching-card-content">
            <div className="to-from d-flex">
              <div className="from">
               <label>From</label>
               <p>cincinnati</p>
              </div>
              <div className="icon d-flex align-items-center justify-content-between">
              <div className="first-circle violet-shade-bg" ></div>
              <div className="second-circle" ></div>
              <div className="second-circle"></div>
              <div className="second-circle"></div>
              <div className="second-circle"></div>
              <i className="fa-solid fa-location-dot violet-shade-c"></i>
              </div>
              <div className="to">
               <label>To</label>
               <p>mineapolis</p>
              </div>
            </div>
            <div className="date-time d-flex">
             <div className="date">
             <label>Date</label>
               <p>xx/mm/yy</p>
             </div>
             <div className="time">
             <label>Time</label>
               <p>5am-9am</p>
             </div>
            </div>
            <div className="seat-price d-flex">
               <div className="seat">
                <label>Price</label>
                <p>180$</p>
               </div>
               <div className="price">
                <label>Seat Availability</label>
                <p>02</p>
               </div>
            </div>
        </div>
    </div>
  )
}
