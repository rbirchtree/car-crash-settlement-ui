import React from "react";
// import AdSense from 'react-adsense';
import Helmet from "react-helmet";
import About from "app/pages/About";
import Calculator from "app/components/Calculator";
import Lost from "app/pages/Lost";
import Tutorial from "app/pages/Tutorial";
import Accidents from "app/pages/Accidents";

import FAQ from "./pages/FAQ";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "app/sections/Navbar";
import Footer from "app/sections/Footer";

import "scss/App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Calculator</title>
          <meta name="description" content="lost car wreck pro se whiplash" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abettersettlement.com" />
          <meta
            property="og:description"
            content="A Better Settlement pro se car wreck whiplash"
          />
        </Helmet>
        <Router>
          <Navbar />
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
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
