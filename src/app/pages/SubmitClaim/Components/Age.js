import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Age({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="age"
        required
        value={value}
        onChange={onChange}
        label="Age"
        className="form-text-input"
      />
    </div>
  );
}
