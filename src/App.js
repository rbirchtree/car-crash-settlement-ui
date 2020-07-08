import React from 'react';
// import AdSense from 'react-adsense';
import logo from './components/media/StandardPack/website_logo_transparent_background.png';
import './App.css';
import About from './components/About';
import Calculator from './components/Calculator';
import Lost from './components/Lost';
// import FilterAble from './components/DataFilter';
// import FilterTable from './components/FilterTable';
import Accidents from './components/Accidents';

import FAQ from './components/FAQ';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
    
  render(){
    return(
    <Router>        
        <nav className="navbar  navbar-expand-lg navbar-light bg-dark mb-3">
            <Link className="nav-link text-light" to="/"><img className="nav-logo" style={{width:120, marginTop: -10}} src={logo} alt="A Better Settlement"/></Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
          <div className="container">
            
            <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/faq">
                  <FAQ />
                </Route>
                <Route path="/login">
                  <Accidents/>
                </Route>
                <Route path="/">
                  <Calculator />
                </Route>
                
                <Route component={Lost} />
            </Switch>
          </div>     
          
          {/* <AdSense.Google
            client='ca-pub-2473381088887971'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
          />  */}
        <div className="footer">
          <div className="col-12 col-sm-6 text-center"><sub>Helping attorneys & Clients Negoiate a Better Settlement Since 2020</sub></div>
        </div>

    </Router>
    )
  }
}


export default App;
