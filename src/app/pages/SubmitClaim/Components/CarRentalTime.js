import React from "react";
import TextField from "@material-ui/core/TextField";

export default function CarRentalTime({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="timerentingacar"
        required
        value={value}
        onChange={onChange}
        label="Car Rental Time"
        className="form-text-input"
      />
    </div>
  );
}
