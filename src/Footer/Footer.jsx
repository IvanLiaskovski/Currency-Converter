import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <address className="creator">Created by <span>Ivan Liaskovski</span></address>
                </div>
            </footer>
        );
    }
}

export default Footer;