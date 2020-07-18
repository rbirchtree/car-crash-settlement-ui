import React from 'react';
import {Link} from "react-router-dom";
import Helmet from "react-helmet";

export default function Lost() {
    return ( 
      <div>
        <Helmet>
          <title>About</title>
          <meta name="description" content="lost car wreck pro se" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abettersettlement.com" />
          <meta property="og:description" content="pro se car wreck" />
        </Helmet>
        <div className="container">
          <h2>404! Click <Link to="/">here</Link> to go back to the homepage...before you get into another wreck while lost. :(</h2>
          </div>
      </div>);
  };