import React, { useState } from 'react';
import axios from 'axios';

//have footer
//have nav
//formspree
// have paypal

export default function AboutPage(){
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting : false,
            status: {ok,msg}
        });
        if (ok){
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({submitting: true});
        axios({
            method: "post",
            url: "my formsprree.io w/ id",
            data: new FormData(form)
        })
        .then( r=> {
            handleServerResponse(true, "Thanks!", form);
        })
        .catch( r => {
            handleServerResponse(false, r.response.data.error,form);
        });
    };
    //continue from here on formspree tutorial
    return (
        <div className="flex-grid">
            <h1>About!</h1>
            <div class="col">
                <p>Rob Birch is a software engineer who was involved in a rear end collusion and his car was totaled in it.
                     He negotiated a better settlement with the insurance companies using data similarly provided on this website. 
                     He believes every victim in a car accident should get the treatment and compensation to move on with life. 
                     Most victims, in his experience, under settle due to their own detriment. 
                     To learn more about future products regarding settlement offerings enter your information below below. 
                    Please also support us by donating via Paypal.</p>
            </div>
            
            
            
        </div>
    )
}