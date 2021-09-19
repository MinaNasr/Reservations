import TimeSlot from "../TimeSlot/TimeSlot";
const Reservation = ({reservedTimeSlots,company}) => {
    
    console.log('reserved: ', reservedTimeSlots)
    return ( 
    <div>
        <h3>Reservation</h3>
        {
          reservedTimeSlots.map(timeslot=>{
            return <TimeSlot timeslot={timeslot}></TimeSlot>
        })  
        }
    </div>
        
       
     );
}

export default Reservation;