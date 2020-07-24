import React from 'react';
import Helmet from "react-helmet";

function Tutorial(){
    return(
        <div>
        <Helmet>
          <title>A Better Settlement</title>
          <meta
            name="description"
            content="Personal Injury Whiplash Settlement Calculator"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abettersettlement.com" />
          <meta
            property="og:description"
            content="Car Insurance Industry Overview"
          />
        </Helmet>
            <h1>Brief Overview on Insurance Settlements</h1>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src="https://www.youtube.com/embed/MtOKQlUXP0k" 
                title="car crash settlement overview"
                frameborder="1" allow="accelerometer"
                className="embed-responsive-item" 
                ></iframe>
            </div>
        </div>
    )
}

export default Tutorial

