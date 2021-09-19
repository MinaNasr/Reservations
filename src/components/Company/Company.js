import { createContext } from 'react';
import TimeSlotsContainer from '../TimeSlotsContainer/TimeSlotsContainer';
import Reservation from '../Reservation/Reservation';
import utils from '../../utils'
import { 
    CompanyContainer,
    CompanyNameSection,
    Container
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
                    <Reservation company={company} reservedTimeSlots={reservedTimeSlots[company.name]}></Reservation>
                </CompanyContainer>
                <CompanyContainer>
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
                    
                </CompanyContainer>
                </Container>
            </companyContext.Provider>
         );
    
}
 
export default Company;