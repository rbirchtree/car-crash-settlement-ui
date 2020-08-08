import React from "react";
import TextField from "@material-ui/core/TextField";

export default function HourlyPay({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="hourlywageforoccupation"
        required
        value={value}
        onChange={onChange}
        label="Occupation Hourly Pay"
        className="form-text-input"
      />
    </div>
  );
}
