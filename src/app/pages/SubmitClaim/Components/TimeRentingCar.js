import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TimeRentingCar({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="timerentingcar"
        required
        value={value}
        onChange={onChange}
        label="Time Renting Car"
        className="form-text-input"
      />
    </div>
  );
}
