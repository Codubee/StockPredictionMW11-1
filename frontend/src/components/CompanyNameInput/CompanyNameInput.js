import React from 'react'
import {InputGroup,Input,InputGroupAddon,InputGroupText,Button} from 'reactstrap'

export default class CompanyNameInput extends React.Component {

    // create state and bind functions
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.goToCompany = this.goToCompany.bind(this)
        this.state = {company: ''}
    }

    // each time input text changes, update state
    handleChange(event) {
        this.setState({company: event.target.value})
    }

    // redirect user to prediction page
    goToCompany() {
        console.log(this.state.name)
        this.props.history.push({pathname: '/information/'+ this.state.company})
    }

    render(){
        return (
            <div>
                <h1 className="text-center">Input company name here </h1>
                <InputGroup>
                    <Input id="companyName" placeholder="Company Name" onChange={this.handleChange}/>
                    <InputGroupAddon addonType="append"><Button onClick={this.goToCompany}>Search</Button></InputGroupAddon>
                </InputGroup>
                <br></br>
            </div>
        )
    }
}