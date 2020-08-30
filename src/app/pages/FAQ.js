import React from "react";
import Helmet from "react-helmet";

export default function FAQ() {
  return (
    <div>
      <Helmet>
        <title>FAQ</title>
        <meta
          name="description"
          content="What to do when you are in a car accident or crash udemy faq"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abettersettlement.com" />
        <meta
          property="og:description"
          content="FAQ frequently asked question"
        />
      </Helmet>
      <h1>FAQ: Frequently Asked Questions</h1>
      <ul>
        <li>
          <p>
            <b>Why does abettersettlement.com exist?</b>
          </p>
          <p>
            We discovered that frequently car accident victims settle before
            they are fully recovered from whiplash and delay their recovery for
            a while because they never get the treatment due to insurance. We
            created a course to help educate people on their rights, so they
            don't settle too quickly. Get your treatment and move on with life
            with our{" "}
            <a href="https://www.udemy.com/course/representing-yourself-in-a-car-accident-whiplash-claim/?referralCode=00EDADA26CD7B328EA6B">
              Udemy Course
            </a>
            ! It is full of good advice that the car insurance companies don't
            want you to know!
          </p>
        </li>
        <li>
          <p>
            <b>
              Why is my settlement from the insurance company amount different
              from what was estimated?
            </b>
          </p>
          <p>
            These settlement estimates provided via the calculator are
            conservative estimates on what a rational person should ask for
            using common accounting and financial analysis techniques. It is
            estimated 90% of all settlements for whiplash cases are too low.
          </p>
        </li>
        <li>
          <p>
            <b>What factors drives personal injury settlements?</b>
          </p>
          <p>
            Generally medical bills, a total car, lost income from doing rehab,
            pain and suffering, etc.
          </p>
        </li>

        <li>
          <p>
            <b>
              Why should I use this data for my claim? You are not a lawyer.
            </b>
          </p>
          <p>
            Settling accident claims can be very arbitrary in nature. This is a
            tool to allow consumers and a fighting chance to make a full
            recovery from an accident. Large insurance companies already have
            tools like this, in fact they are significantly better using machine
            learning and artificial intelligence.
          </p>
        </li>

        <li>
          <p>
            <b>
              Is "A Better Settlement" interested in working with lawyers, or
              investors?
            </b>
          </p>
          <p>
            Yes, "A Better Settlement" is interested in working with lawyers,
            medical professionals, or investors. Development has only just begun
            to build out a database of claim settlements for further analysis.
            Please feel free to contact us using the form on the About Page or
            at rb@abettersettlement.com.
          </p>
        </li>
      </ul>
    </div>
  );
}
