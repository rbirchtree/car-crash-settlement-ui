import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
//import datePicker
export const DatePickerField = ({ ...props }) => {
  //passing in porops
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      //pass in field
      {...props}
      //pass in props
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;
