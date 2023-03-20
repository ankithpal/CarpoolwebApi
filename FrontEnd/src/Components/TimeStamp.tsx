import './timestamp.scss';
import { useState } from 'react';
export const TimeStamp = () => {
  
  let [selectedTime , setSelectedTime] = useState<string>('');
  return (
    <>
     <div className='timestamp w-100 h-100'>
        <p className='text-secondary mt-1'>Time</p>
        <div className="time-container d-flex flex-wrap justify-content-around align-items-start">
        <div className={`time-div d-flex align-items-center justify-content-center mb-1 
            ${selectedTime == '1' ? 'selected-time':''}`} onClick={e=>{e.preventDefault(); setSelectedTime('1');}}>9am-12am</div>
            <div className={`time-div d-flex align-items-center justify-content-center mb-1 
            ${selectedTime == '2' ? 'selected-time':''}`} onClick={e=>{e.preventDefault(); setSelectedTime('2');}}>9am-12am</div>
             <div className={`time-div d-flex align-items-center justify-content-center mb-1
            ${selectedTime == '3' ? 'selected-time':''}`} onClick={e=>{e.preventDefault(); setSelectedTime('3');}}>9am-12am</div>
             <div className={`time-div d-flex align-items-center justify-content-center mb-1 
            // ${selectedTime == '4' ? 'selected-time':''}`} onClick={e=>{e.preventDefault(); setSelectedTime('4');}}>9am-12am</div>
             <div className={`time-div d-flex align-items-center justify-content-center mb-1 
            ${selectedTime == '5' ? 'selected-time':''}`} onClick={e=>{e.preventDefault(); setSelectedTime('5');}}>9am-12am</div>
             <div className={`time-div d-flex align-items-center justify-content-center mb-1
            ${selectedTime == '6' ? 'selected-time':''}`} onClick={e=>{e.preventDefault(); setSelectedTime('6');}}>9am-12am</div>
            </div>
     </div>
      
    </>
    
  )
}
