import React, { Component } from 'react';
import Header from './Header';
import './Quote.css';
class Quote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: []
        }
    }

    componentDidMount() {
        fetch('https://talaikis.com/api/quotes/')
            .then((response) => {
                return response.json();
            })
            .then((resultJson) => {
                this.setState({
                    quote: resultJson
                })
            });
    }

    render() {
        const loading = (
            <div className="quote"><h2 >Loading quotes...</h2> <h5> from https://talaikis.com/api/quotes/</h5></div>
        );

        const quotes = (
            this.state.quote.map((q) => {
                return (
                    <div className="quote">
                        <blockquote>
                        <h5><span class="glyphicon glyphicon-tag"></span> : {q.cat}</h5>

                        {q.quote}
                            <br/><span className="author"><i>{q.author}</i></span>
                        </blockquote>
                    </div>
                );
            })
        );

        return (
            <div>
                {this.state.quote.length ===0?  loading : quotes}
            </div>
        );
    }
}


export default Quote
