import React from 'react';
import {Formik, Field,Form} from 'formik';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { numberFormat } from "./numCurrency";
import "react-datepicker/dist/react-datepicker.css";
import Helmet from "react-helmet";


class Calculator extends React.Component {
  

    render(){
      
      
        return (
            <div className="container">
              <Helmet>
                  <title>A Better Settlement</title>
                  <meta name="description" content="settlement calculator personal injury lawyer whiplash" />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://abettersettlement.com" />
                  <meta property="og:description" content="settlement calculator personal injury lawyer whiplash" />
              </Helmet>
                <Formik
                    initialValues={{
                      email: 'john.doe@gmail.com',
                      firstName:'John',
                      lastName:'Doe',
                      dateOfAccident: new Date(),
                      numOfVisitsToRehab:60,
                      timeAtRehabInHours:1,
                      timeDrivingtoRehabPerAVisitRndTrip:1,
                      timeWithAtty:1,
                      timeAtAccident:2,
                      timeRentingACar:1,
                      timeDoingRehabPerADay:1,
                      dateRehabIsFinished: new Date(),
                      hourlyWageForOccupation:40,
                      age:42
                    }
                    }
                    validate={(props, a) => console.log('a',props, a)}
                    onSubmit={(values, { setSubmitting }) => {
                        //setTimeout(() => {
                          //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
                          axios.post(process.env.REACT_APP_URL, {values})
                            .then(function(response){
                              console.log(response);
                            })
                            .catch(function(error){
                              console.log(error);
                            })
                          // alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        //}, 400);
                    }}
                >
            {({ isSubmitting, values, setFieldValue }) => (
            
              <Form>
                
                      <div className="form-row">
                        <div className="form-group col-md-3">
                        <label htmlFor="email">Email</label>
                          <Field type="email" name="email" placeholder="email"/>
                        </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" placeholder="John"/>
                        </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="lastName" name="lastName" placeholder="Doe"/>
                      </div>
                      </div>
                      <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="dateOfAccident">Date of Accident</label>
                          <DatePicker 
                            selected={values.dateOfAccident}
                            dateFormat="MMMM d, yyyy"
                            className="form-control"
                            name="dateOfAccident"
                            onChange={date => setFieldValue('dateOfAccident', date)}
                          />
                        </div>
                        <div className="form-group col-md-5">
                        <label htmlFor="dateRehabIsFinished">Date Rehab is Finished</label>
                            <DatePicker 
                              selected={values.dateRehabIsFinished}
                              dateFormat="MMMM d, yyyy"
                              className="form-control"
                              name="startDate"
                              onChange={date => setFieldValue('dateRehabIsFinished', date)}
                            />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="numOfVisitsToRehab">Number of Visits to PT</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="numOfVisitsToRehab" value={values.numOfVisitsToRehab}/>
                        </div>  
                        
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="timeAtRehabInHours">Time at PT in Hours per a Visit</label>
                        </div>
                        <div className="form-group col-md-3">
                            <Field type="text" name="timeAtRehabInHours" value={values.timeAtRehabInHours}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="timeDrivingtoRehabPerAVisitRndTrip">Time Driving to PT per a Visit Roundtrip in Hours</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="timeDrivingtoRehabPerAVisitRndTrip" value={values.timeDrivingtoRehabPerAVisitRndTrip}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="timeDoingRehabPerADay">Hours of PT at Home per a Day</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="timeDoingRehabPerADay" value={values.timeDoingRehabPerADay}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="timeWithAtty">Time with Attorney in Hours</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="timeWithAtty" value={values.timeWithAtty}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="timeAtAccident">Time at Accident in Hours</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="timeAtAccident" value={values.timeAtAccident}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="timeRentingACar">Time Renting a Car in Hours</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="timeRentingACar" value={values.timeRentingACar}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="hourlyWageForOccupation">Hourly Wage for Occupation</label>
                        </div>
                        <div className="form-group col-md-3">
                          <Field type="text" name="hourlyWageForOccupation" value={values.hourlyWageForOccupation}/>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="age">Age of Victim</label>
                        </div>
                        <div className="form-group col-md-3">
                            <Field type="text" name="age" value={values.age}/>
                        </div>
                      </div>
                        <label className="total"><b>Total</b></label>
                      <div>{ 

                              numberFormat((1+(79-values.age)/79)*(2*values.hourlyWageForOccupation*((Number(values.timeAtAccident) +Number(values.timeRentingACar) + Number(values.timeWithAtty))+
                               ((((values.dateRehabIsFinished-values.dateOfAccident)/86400000)*Number(values.timeDoingRehabPerADay))+
                               ((Number(values.timeDrivingtoRehabPerAVisitRndTrip)+Number(values.timeAtRehabInHours))*Number(values.numOfVisitsToRehab))))))
                          //do a multipler of the average age of death in the us in 2020 * 2 for double entry of lost opportunites
                          }</div>
                    
                    <button type="submit" className="btn btn-lg btn-outline-success mt-4 mb-4" disabled={isSubmitting}>Submit</button>
                  
                
              </Form>
          )}
        </Formik>
    </div>

        )
    }
}

export default Calculator;