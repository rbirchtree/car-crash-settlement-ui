import React from 'react';
import Helmet from "react-helmet";


export default function FAQ(){
    

    return (
        <div className="flex-grid">
            <Helmet>
                  <title>FAQ</title>
                  <meta name="description" content="FAQ frequently asked questions" />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://abettersettlement.com" />
                  <meta property="og:description" content="FAQ frequently asked question" />
              </Helmet>
            <h1>FAQ: Frequently Asked Questions</h1>
            <div className="col">
                    <ul>
                        <li>
                            <p>
                                Why is my settlement from the insurance company amount different from what was estimated?
                            </p>
                            <p>
                                These settlement estimates are conservative guess on what a rational person should ask for using common accounting and financial analysis techniques.
                            </p>
                        </li>
                        <li>
                            <p>
                                What factors drives personal injury settlements?</p>
                            <p>
                                Generally, medical bills, lost income from doing rehab, pain and suffering, etc.</p>
                        </li>
                            
                        <li>
                            <p>
                                Why should I use this data for my claim? You are not a lawyer.</p>
                            <p>
                            Most lawyers are not programmers and settling accident claims can be very arbitary in  nature. 
                            This is a tool to allow consumers a fighting chance to make a full recovery from an accident. Large insurance
                            companies already have tools like this, in fact they are significantly better.
                            </p>
                        </li>
                        

                        <li>
                            <p>Is "A Better Settlement" interested in working with lawyers, or investors?</p>    
                            <p>
                                Yes, "A Better Settlement" is interested in working with lawyers or investors. Development has only just begun.
                                Please feel free to contact us at rob.w.birch(at)gmail.com or use the form on the About Page.
                            </p>
                        </li>

                    </ul>
            </div>
            
        </div>
    )
}