import React from "react";
import Helmet from "react-helmet";

import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <b>Why does ABetterSettlement.com exist?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            <b>
              Why is my settlement from the insurance company amount different
              from what was estimated?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            These settlement estimates provided via the calculator are
            conservative estimates on what a rational person should ask for
            using common accounting and financial analysis techniques. It is
            estimated 90% of all settlements for whiplash cases are too low.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            <b>What factors drives personal injury settlements?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Generally medical bills, a total car, lost income from doing rehab,
            pain and suffering, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <b>
              Why should I use this data for my claim? You are not a lawyer.
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Settling accident claims can be very arbitrary in nature. This is a
            tool to allow consumers and a fighting chance to make a full
            recovery from an accident. Large insurance companies already have
            tools like this, in fact they are significantly better using machine
            learning and artificial intelligence.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <b>
              Is "A Better Settlement" interested in working with lawyers, or
              investors?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, "A Better Settlement" is interested in working with lawyers,
            medical professionals, or investors. Development has only just begun
            to build out a database of claim settlements for further analysis.
            Please feel free to contact us using the form on the About Page or
            at rb@abettersettlement.com.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
