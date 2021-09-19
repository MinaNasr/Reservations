import { createContext } from 'react';
import TimeSlotsContainer from '../TimeSlotsContainer/TimeSlotsContainer';
import Reservation from '../Reservation/Reservation';
import utils from '../../utils'
import { 
    CompanyContainer,
    CompanyNameSection,
    Container,
    SlotsContainer
} from './Company.style';
export const companyContext = createContext();

const Company = ({company, reservedTimeSlots,HandleTimeSlotClickCallBack}) => {


        const timeSlotsObject = utils.Dates.aggregateTimeSlotsByDay(company.time_slots);
        return ( 
            <companyContext.Provider value={{company}}>
                <Container>

                <CompanyContainer>
                    <CompanyNameSection>{company.name}</CompanyNameSection>
                </CompanyContainer>
                <CompanyContainer>
                    {/* hello */}
                    <Reservation company={company} reservedTimeSlots={Object.keys(reservedTimeSlots).length ? reservedTimeSlots[company.name] : []}></Reservation>
                </CompanyContainer>
                <SlotsContainer>
                    {
                        Object.keys(timeSlotsObject).map(key=>{
                            return <TimeSlotsContainer 
                            key={key}  
                            timeslots={timeSlotsObject[key]} 
                            date={key}
                            company={company}
                            HandleTimeSlotClickCallBack={HandleTimeSlotClickCallBack}
                            />
                        })
                    }
                    
                </SlotsContainer>
                </Container>
            </companyContext.Provider>
         );
    
}
 
export default Company;