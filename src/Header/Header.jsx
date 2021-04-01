import React from "react";
import "./Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: ""
        }
        this.toggler = this.toggler.bind(this);
    }
    toggler() {
        if (this.state.toggle === "") {
            this.setState({ toggle: "active" })
        }
        else {
            this.setState({ toggle: "" });
        }
    }
    render() {
        return (
            <header className="header">
                <div className="container flex-container">
                    <div className="title-wrapper">
                        <h1 className="title-main">Currency App</h1>
                    </div>
                    <div className={`nav-toggler ${this.state.toggle}`}>
                        <button onClick={this.toggler}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className={`navbar-wrapper ${this.state.toggle}`}>
                        {/*
                        <nav className="navbar">
                            <ul className="nav">
                                <li className="nav-item"><a href="/" className="nav-link">Kalkulator</a></li>
                                <li className="nav-item"><a href="/rates" className="nav-link">Waluty</a></li>
                                <li className="nav-item"><a href="/contact" className="nav-link">Kontakt</a></li>
                            </ul>
                        </nav>
                        */}
                    </div>
                </div>
            </header >
        );
    }
}

export default Header;