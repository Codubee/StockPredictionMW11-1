import React from 'react'
import Prediction from '../Prediction/Prediction'

export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = { companyName: props.companyName }
    }

    componentDidMount() {
        //here we call the api that gets the company news
    }

    render() {
        return (
            <>
                <Prediction news={this.state.news} />
                <h1>News is: {this.state.companyName}</h1>
            </>
        )
    }
}
