import React from "react";

const countries = require("../counrties.json");

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static getDerivedStateFromProps(props, state) {
        return { currencies: props.currencies };
    }

    render() {
        return (
            <div className="currency-left" >
                <fieldset>
                    <h3 className="sub-title">Otdaje</h3>
                    <input className="select-currency" list="list" onChange={this.props.convert}
                        ref={this.props.give} onFocus={e => e.target.value = ""} />
                    <datalist className="currency-list" id="list">
                        {
                            Object.keys(this.state.currencies).map(item => {
                                return (
                                    <option key={item} value={item + " " + countries[item]}>
                                        {item + " " + countries[item]}
                                    </option>
                                );
                            })
                        }
                    </datalist>
                </fieldset>
                <fieldset>
                    <h5 className="sum-title">Suma</h5>
                    <input type="number" min="0" ref={this.props.inGive} onInput={this.props.convert}
                        className="currency-value" value={this.state.giveValue} name="input1" />
                </fieldset>
            </div>
        );
    }
}

export default Left;