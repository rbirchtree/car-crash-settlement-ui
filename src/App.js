import React from "react";
// import AdSense from 'react-adsense';
import Helmet from "react-helmet";
import logo from "./components/media/StandardPack/website_logo_transparent_background.png";
import "./App.css";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Lost from "./components/Lost";
import Tutorial from "./components/Tutorial";
import Accident from "./components/Accident";
import Accidents from "./components/Accidents";

import FAQ from "./components/FAQ";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Calculator</title>
          <meta name="description" content="lost car wreck pro se" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abettersettlement.com" />
          <meta property="og:description" content="pro se car wreck whiplash" />
        </Helmet>
        <Router>
          <nav className="navbar  navbar-expand-lg navbar-light bg-dark mb-3">
            <Link className="nav-link text-light" to="/">
              <img
                className="nav-logo"
                style={{ width: 120, marginTop: -10 }}
                src={logo}
                alt="A Better Settlement"
              />
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/data">
                  Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/tutorial">
                  Tutorial
                </Link>
              </li>
            </ul>
          </nav>

          <div className="container clear-top">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/data" component={Accidents} />
              {/* <Route exact path="/data/:id" render={(props) => (
                        <Accident {...props}/>)}/>
                  {/* <Route exact path="/data" render={(props) => <Accident {...props} title={`Props through render`} />} /> */}
              <Route exact path="/tutorial" component={Tutorial} />
              <Route exact path="/" component={Calculator} />
              <Route component={Lost} />
            </Switch>
            <div class="push"></div>
          </div>

          {/* <AdSense.Google
              client='ca-pub-2473381088887971'
              slot='7806394673'
              style={{ display: 'block' }}
              layout='in-article'
              format='fluid'
            />  */}

          <div className="text-center footer">
            <span className="text-muted">
              Helping Attorneys & Clients Negoiate a Better Settlement Since
              2020.
            </span>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
