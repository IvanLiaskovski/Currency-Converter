import React from "react";
import connectAPI from "../API/currency";
import "./Rates.css";

class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }
    componentDidMount() {
        connectAPI("latest").then(data => this.setState({ data: data.results }));
    }
    render() {
        let currency = Object.entries(this.state.data).sort((a, b) => b[1] - a[1]);
        console.log(currency);
        return (
            <main className="rates">
                <div className="container">
                    <h2 className="title">Waluty</h2>
                    <div className="rates-container">
                        {currency.map(item => {
                            return (
                                <div className="rate">
                                    <h3 className="sub-title">{item[0]}</h3>
                                    <p className="prise">{item[1].toFixed(2)} USD</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        );
    }
}

export default Rates;
