import React from 'react';
import MyForm from './Formspree.js';

export default function AboutPage(){
    

    return (
        <div className="flex-grid">
            <h1>About: A Better Settlement</h1>
            <div className="col">
                    <p>Rob Birch is a software engineer who was involved in a rear end collusion and his car was totaled in it.
                        He negotiated a better settlement with the insurance companies using data similarly provided on this website. 
                        He believes every victim in a car accident should get the treatment and compensation to move on with life. 
                        Most victims and attorneys, undersettle to their own detriment. 
                        To learn more about future products regarding settlement offerings enter your information below below. 
                        Please also support us by donating via Paypal to share our <a href="https://paypal.me/pools/c/8pR2Wsd5OY"> server costs at Paypal </a>.
                    </p>
            </div>
            <MyForm/>
        </div>
    )
}