import React from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Media } from 'reactstrap'


export default class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = { companyName: props.companyName, news : [] }
        
    }

    componentDidMount() {
        axios.get("/news/" + this.state.companyName)
        .then( (response) => {
            this.setState({news: response.data})
        })
        
    }

    render() {
        let smallNewsArr = this.state.news.slice(0, 5)
        return (
            <>
            <h2>Latest news articles on {this.state.companyName}</h2>
    
            <ListGroup>
                {   
                    smallNewsArr.map((news, index) => (
                        <ListGroupItem key={index}>
                            <ListGroupItemHeading className="text-left">
                                <Media object width="20%" src={news.image}/>
                                <br/>
                                <a href={news.url}>{news.headline}</a>        
                            </ListGroupItemHeading>
                            
                            <ListGroupItemText> 
                                <p className="text-left">Summary: {news.summary}</p>
                                <p>Source: {news.source}</p>
                                <p>{getTime(news.datetime)}</p>
                            </ListGroupItemText>
                        </ListGroupItem>

                    ))
                        
                }   
            </ListGroup>
            </>
        )
    }
}

function getTime(unixtime) {
    let date = new Date(unixtime * 1000)
    return date.toLocaleString()
}
