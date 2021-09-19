
import { TimeSlotContainer } from './TimeSlotView.style';
import { useContext } from 'react';
import { context } from '../Container/Container';
import TimeSlot from '../TimeSlot/TimeSlot';
import { TimeSlots } from './TimeSlotView.style';
const TimeSlotView = ({timeslots,company,HandleTimeSlotClickCallBack}) => {
    return ( 
        <TimeSlots>
            {
            timeslots.map(timeslot=>{
                return (
                <TimeSlot 
                 timeslot={timeslot}
                 company={company}
                HandleTimeSlotClickCallBack={HandleTimeSlotClickCallBack}
                />
                )
            })
            }
        </TimeSlots>
       
     );
}

export default TimeSlotView;