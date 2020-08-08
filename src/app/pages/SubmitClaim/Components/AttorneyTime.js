import React from "react";
import TextField from "@material-ui/core/TextField";

export default function AttorneyTime({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="timewithatty"
        required
        value={value}
        onChange={onChange}
        label="Time at Attorney"
        className="form-text-input"
      />
    </div>
  );
}
