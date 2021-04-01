import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className="contact">
                <div className="container">
                    <h2 className="title">Kontakt</h2>
                    <div className="contact-inner main-inner">
                        <h3 className="sub-title">Ivan Liaskovski</h3>
                        <ul className="contact-list">
                            <li className="contact-item">Main cite: <a href="#"></a></li>
                            <li className="contact-item">Email: <a href="#"></a></li>
                            <li className="contact-item">Phone:<a href="#"></a></li>
                        </ul>
                        <ul className="social-media">
                            <li className="social-item">
                                <a className="social-link" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="social-item">
                                <a className="social-link" href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="social-item">
                                <a className="social-link" href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="social-item">
                                <a className="social-link" href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;