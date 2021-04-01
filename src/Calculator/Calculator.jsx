import React from "react";
import connectAPI from "../API/currency";
import Left from "./components/Left";
import Right from "./components/Right";
import "./Calculator.css";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            getValue: ""
        }
        this.curGive = React.createRef();
        this.curGet = React.createRef();
        this.giveValue = React.createRef();

        this.change = this.change.bind(this);
        this.convert = this.convert.bind(this);
    }

    componentDidMount() {
        connectAPI().then(data => this.setState({ data: data.results }));
    }

    change(e) {
        e.preventDefault();
        [this.curGive.current.value, this.curGet.current.value] =
            [this.curGet.current.value, this.curGive.current.value];
        this.convert();
    }

    convert(e) {
        const { name, value } = this.giveValue.current;
        let result = 0;
        //Math process
        let give = 1 / this.state.data[String(this.curGive.current.value).slice(0, 3)];
        let get = 1 / this.state.data[String(this.curGet.current.value).slice(0, 3)];
        result = give * value / get;

        this.setState({ [name]: value });
        this.setState({ getValue: result.toFixed(2) });
    }
    render() {
        return (
            <main className="main">
                <div className="container">
                    <h2 className="title">Kalkulator walutowy</h2>
                    <form>
                        <div className="currency-inner main-inner">
                            <Left currencies={this.state.data} convert={this.convert} give={this.curGive}
                                inGive={this.giveValue} />
                            <div className="exchange">
                                <button onClick={this.change}><i className="fas fa-exchange-alt"></i></button>
                            </div>
                            <Right currencies={this.state.data} convert={this.convert}
                                getCurrency={this.curGet} getVal={this.state.getValue} />
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

export default Calculator;