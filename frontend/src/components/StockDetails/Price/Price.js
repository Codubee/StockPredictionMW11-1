import React from 'react'
import axios from 'axios'
export default class Price extends React.Component{
    constructor(props){
        super(props)
        this.state = { companyName:props.companyName, details : []}
    }

    componentDidMount(){
        axios.get('/stockname/' + this.state.companyName)
        .then((response)=> {
            this.setState({details: response.data})
        })
    }

    render(){
        return(
            <div>
                <h1>Company: {this.state.companyName}</h1>
                <p>Current: ${this.state.details.c}</p>
                <p>High: ${this.state.details.h}</p>
                <p>Low: ${this.state.details.l}</p>
                <p>Opening: ${this.state.details.o}</p>
                <p> Previous Close: ${this.state.details.pc}</p>
            </div>
            
        )
    }
}