
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
            const data = {
                company: this.props.company,
                timeslot: this.props.timeslot,
                action:''
            }
            if(!this.state.disabled){
                this.setState({disabled: true});
                data['action'] = 'add';
                this.props.HandleTimeSlotClickCallBack(data);
            }else{
                this.setState({disabled: false});
                data['action'] = 'remove'
                this.props.HandleTimeSlotClickCallBack(data)
            }

            // this.setState({disabled: !this.state.disabled});
            // const data = {
            //     company: this.props.company,
            //     timeslot: this.props.timeslot
            // }
            // this.props.HandleTimeSlotClickCallBack(data)
        }
  
  
    render() {
        const {timeslot, reservation} = this.props;
        return ( 
            <companyContext.Consumer>
                {
                    (props) => {
                        return(
                            <TimeSlotContainer onClick={this.handleTimeSlotClick} reservation={reservation} disabled={this.state.disabled} key={Math.random()}>
                                {timeslot[0]} - {timeslot[1]}
                            </TimeSlotContainer>
                        )
                    }
                }
            </companyContext.Consumer>
                
           
         );
    }
}

export default TimeSlot;