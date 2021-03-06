import React, { useEffect } from "react";
// import AdSense from 'react-adsense';
import { connect, useSelector, useDispatch } from "react-redux";

import Helmet from "react-helmet";
import ProtectedRoute from "app/components/ProtectedRoute";

import About from "app/pages/About";
import Calculator from "app/components/Calculator";
import Lost from "app/pages/Lost";
import Tutorial from "app/pages/Tutorial";
import Accidents from "app/pages/Accidents";
import AccidentDetails from "app/pages/AccidentDetails";
import SubmitClaim from "app/pages/SubmitClaim/form";



import uploadData from "app/misc/uploadData";

import FAQ from "./pages/FAQ";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "app/sections/Navbar";
import Footer from "app/sections/Footer";

import { setUser, setUserToken } from "redux/actions/userActions";

import firebase from "config/firebase";

import "scss/App.scss";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    (async function IIFE() {
      await authListener();
    })();
  }, [user]);

  async function authListener() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let userToken = await firebase.auth().currentUser.getIdTokenResult();
        dispatch(setUser(user));
        dispatch(setUserToken(userToken.claims)); //checks for special privleges such as admin role. probably won't be necessary.
      }
    });
  }

  return (
    <div>
      <Helmet>
        <title>Calculator</title>
        <meta name="description" content="lost car wreck pro se whiplash" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abettersettlement.com" />
        <meta
          property="og:description"
          content="A Better Settlement pro se car wreck whiplash"
        />
      </Helmet>
      <Router>
        <Navbar />
        {/* Welcome message is only checking authentication and can be deleted later */}
        <h3 style={{ textAlign: "center" }}>
          {user ? (
            <div>
              Welcome {user.displayName}
              <br />
            </div>
          ) : (
            <></>
          )}
        </h3>
        <div style={{ minHeight: "80vh" }} className="container clear-top">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/data" component={Accidents} />
            <Route exact path="/accidents/:id" component={AccidentDetails} />
            <ProtectedRoute exact path="/data/:id" component={Accidents} />
            {/* <Route exact path="/data/:id" render={(props) => (
                        <Accident {...props}/>)}/>
                  {/* <Route exact path="/data" render={(props) => <Accident {...props} title={`Props through render`} />} /> */}
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/" component={Calculator} />
            <Route exact path="/submitclaim" component={SubmitClaim} />
            <Route exact path="/testfeatures" component={uploadData} />
            <Route component={Lost} />
          </Switch>
          <div class="push"></div>
        </div>

        {/* <AdSense.Google
              client='ca-pub-2473381088887971'
              slot='7806394673'
              style={{ display: 'block' }}
              layout='in-article'
              format='fluid'
            />  */}
        <Footer />
      </Router>
    </div>
  );
}

export default connect()(App);