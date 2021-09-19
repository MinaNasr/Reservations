
import { TimeSlotContainer } from './TimeSlot.style';
import { companyContext } from '../Company/Company';
import { Component, useContext } from "react";

class TimeSlot extends Component {
    
    constructor(props) {
      super(props);
  
      this.state = {
        disabled:false,
      };
      this.handleTimeSlotClick = this.handleTimeSlotClick.bind(this)
    }


    handleTimeSlotClick(e){
        this.setState({disabled: true});
        console.log('timeslot: ',this.props.timeslot)
        console.log('company: ', this.props.company)
        const data = {
            company: this.props.company,
            timeslot: this.props.timeslot
        }
        this.props.HandleTimeSlotClickCallBack(data)
    }
  
  
    render() {
        const {timeslot,company} = this.props;
        return ( 
            <companyContext.Consumer>
                {
                    (props) => {
                        return(
                            <TimeSlotContainer onClick={this.handleTimeSlotClick} disabled={this.state.disabled} key={Math.random()}>
                                {timeslot[0]} - 
                                {timeslot[1]} -
                            </TimeSlotContainer>
                        )
                    }
                }
            </companyContext.Consumer>
                
           
         );
    }
}

export default TimeSlot;