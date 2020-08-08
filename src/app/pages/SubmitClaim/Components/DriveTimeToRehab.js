import React from "react";
import TextField from "@material-ui/core/TextField";

export default function DriveTime({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="timedrivingtorehabperavisitrndtrip"
        required
        value={value}
        onChange={onChange}
        label="Drive Time to Rehab"
        className="form-text-input"
      />
    </div>
  );
}
