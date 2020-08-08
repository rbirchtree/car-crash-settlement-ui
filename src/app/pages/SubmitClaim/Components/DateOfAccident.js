import React from "react";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateOfAccident({ value }) {
  return (
      <div>
    {({ isSubmitting, values, setFieldValue }) => (
        <Form>
      <DatePicker
        selected={value}
        dateFormat="MMMM d, yyyy"
        className="form-control"
        name="startDate"
        onChange={(date) => setFieldValue("dateRehabIsFinished", date)}
      />
    </Form>
          )}
        </Formik>
    </div>
  );
}
