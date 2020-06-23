import React from 'react';
import AdSense from 'react-adsense';
import logo from './components/media/StandardPack/website_logo_transparent_background.png';
import './App.css';
import About from './components/About';
import Calculator from './components/Calculator';
import Lost from './components/Lost';
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
        <nav>
          <ul>
            <li>
              <Link className="home" to="/"><img className="logo" src={logo} alt="A Better Settlement" /></Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
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
                <Route path="/">
                  <Calculator />
                </Route>
                
                <Route component={Lost} />
            </Switch>
          </div>     
          
          <AdSense.Google
            client='ca-pub-2473381088887971'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
          />
        <div className="footer">Helping attorneys & Clients Negoiate a Better Settlement Since 2020</div>
    </Router>
    )
  }
}


export default App;
