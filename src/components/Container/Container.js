import { Component , createContext} from "react";
import axios from "axios";
import Company from '../Company/Company';
import { AppContainer } from './Container.style';
export const context = createContext();
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            companies: [],
            reservations:{
                'Company 1':[],
                'Company 2':[],
                'Company 3':[],
            },
        }
        this.HandleTimeSlotClickCallBack = this.HandleTimeSlotClickCallBack.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:3002/companies')
        .then(res=>res.data)
        .then(res=>{
            console.log('res',res);
            this.setState({companies: res});
        })
    }

    HandleTimeSlotClickCallBack = (data)=>{
        console.log('data',data)
        let obj = Object.assign({},this.state.reservations);
        for(var key in obj){
            if(key === data.company.name){
                obj[key].push(data.timeslot);
            }
        }
        console.log('objeect: ', obj)
        this.setState({
            reservations: obj
        })


    }

    render() { 
        return(
            
                <AppContainer>
                    {
                        this.state.companies.map(company => {
                            return <Company
                             HandleTimeSlotClickCallBack={this.HandleTimeSlotClickCallBack} 
                             key={company.id} 
                             company={company} 
                             reservedTimeSlots={this.state.reservations}/>
                        })
                    }
                </AppContainer>
            
 
        )
        
    }
}
 
export default Container;