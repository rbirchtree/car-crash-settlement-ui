import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Visits({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="numofvisitstorehab"
        required
        value={value}
        onChange={onChange}
        label="Number of Visits to Rehab"
        className="form-text-input"
      />
    </div>
  );
}
