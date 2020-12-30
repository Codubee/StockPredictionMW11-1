import React from 'react'

export default class Price extends React.Component{
    constructor(props){
        super(props)
        this.state = { companyName:props.companyName}
    }

    componentDidMount(){
        //here we call current stock price api
    }

    render(){
        return(
            <h1>Price is: {this.state.companyName}</h1>
        )
    }
}
