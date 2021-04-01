import React from "react";
import Header from "./Header/Header";
import Calculator from "./Calculator/Calculator";
import Rates from "./Rates/Rates";
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import "./Animations/Animations.css"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="blue-gradient"></div>
        <Header />
        <Router>
          <Switch>
            <Link exact to="/" path="/" component={Calculator}></Link>
            <Link exact to="/rates" path="/rates" component={Rates}></Link>
            <Link exact to="/contact" path="/contact" component={Contact}></Link>
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
