import TimeSlot from "../TimeSlot/TimeSlot";
import { ReservationTitle } from './Reservatiom.style';
const Reservation = ({reservedTimeSlots,company}) => {
    
    console.log('reserved: ', reservedTimeSlots)
    return ( 
    <div>
        <ReservationTitle>Reservation</ReservationTitle>
        {
          reservedTimeSlots.map(timeslot=>{
            return <TimeSlot key={timeslot[2].start_time} reservation timeslot={timeslot}></TimeSlot>
        })  
        }
    </div>
        
       
     );
}

export default Reservation;