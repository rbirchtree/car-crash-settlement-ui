import React from 'react';
import Helmet from "react-helmet";
import MyForm from './Formspree.js';

export default function AboutPage(){
    

    return (
        <div className="flex-grid">
            <Helmet>
                  <title>About</title>
                  <meta name="description" content="about Rob Birch" />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://abettersettlement.com" />
                  <meta property="og:description" content="about Rob Birch" />
              </Helmet>
            <h1>About: A Better Settlement</h1>
            <div className="col">
                    <p>Rob Birch is a software engineer who was involved in a rear end collusion and his car was totaled in it.
                        He negotiated a better settlement with the insurance companies using data similarly provided on this website. 
                        He believes every victim in a car accident should get the treatment and compensation to move on with life. 
                        Most victims and attorneys, undersettle to their own detriment. 
                        To learn more about future products regarding settlement offerings enter your information below. 
                        Please also support us by donating via Paypal to share our <a href="https://paypal.me/pools/c/8pR2Wsd5OY"> server costs at Paypal </a>.
                    </p>
            </div>
            <MyForm/>
        </div>
    )
}