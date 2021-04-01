import React from "react";

const countries = require("../counrties.json");

class Right extends React.Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        return { currencies: props.currencies };
    }

    render() {
        return (
            <div className="currency-right">
                <fieldset>
                    <h3 className="sub-title">Dostaje</h3>
                    <input className="select-currency" list="list2" ref={this.props.getCurrency}
                        onChange={this.props.convert} onFocus={e => e.target.value = ""} />
                    <datalist className="currency-list" id="list2">
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
                    <input type="number" className="currency-value" readOnly={true} name="in2"
                        defaultValue={this.props.getVal} />
                </fieldset>
            </div>
        );
    }
}

export default Right;