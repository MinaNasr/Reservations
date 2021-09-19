
import TimeSlotView from "../TimeSlotView/TimeSlotView";
import { Container } from './TimeSlotsContainer.style';
const TimeSlotsContainer = ({timeslots, date, company, HandleTimeSlotClickCallBack}) => {
    return ( 
        <Container>
            <h2>{date}</h2>
            <TimeSlotView  
             timeslots={timeslots}
             company={company}
             HandleTimeSlotClickCallBack={HandleTimeSlotClickCallBack}
             />
        </Container>
     );
}

export default TimeSlotsContainer;