import React from "react";
import Helmet from "react-helmet";
import MyForm from "./Sections/Formspree.js";
import rob from "media/rob.jpeg";
export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About Rob Birch</title>
        <meta name="description" content="About Rob Birch totaled car accident compensation for settlement" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abettersettlement.com" />
        <meta property="og:description" content="about Rob Birch" />
      </Helmet>

      <h1>About: A Better Settlement</h1>
      <div className="row content">
        <div className="col-sm">
          <p>
            <img
              className="mypic rounded-circle float-right"
              src={rob}
              alt="Rob"
            />
            Rob Birch is a software engineer who was involved in a rear-end
            collision. His car was totaled. Through an analytical approach, he
            negotiated a better settlement. The insurance company was presented
            with data similar to the time and wages analysis on this site. He
            believes every victim in a car accident should get the treatment and
            compensation they deserve. Most victims and attorneys settle for
            less because they lack the analytical tools to recover their losses.
            To learn more about future products regarding settlement offerings
            enter your information below.
          </p>
          <div className="col-sm">
            <MyForm />
          </div>
        </div>
      </div>
    </div>
  );
}
