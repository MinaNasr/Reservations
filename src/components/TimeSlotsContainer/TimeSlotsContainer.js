
import TimeSlotView from "../TimeSlotView/TimeSlotView";
import { Container,Date } from './TimeSlotsContainer.style';
const TimeSlotsContainer = ({timeslots, date, company, HandleTimeSlotClickCallBack}) => {
    return ( 
        <Container>
            <Date>{date}</Date>
            <TimeSlotView  
             timeslots={timeslots}
             company={company}
             HandleTimeSlotClickCallBack={HandleTimeSlotClickCallBack}
             />
        </Container>
     );
}

export default TimeSlotsContainer;