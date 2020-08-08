import React from "react";
import TextField from "@material-ui/core/TextField";

export default function RehabHours({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="timeatrehabinhours"
        required
        value={value}
        onChange={onChange}
        label="Average Time at Rehab"
        className="form-text-input"
      />
    </div>
  );
}
