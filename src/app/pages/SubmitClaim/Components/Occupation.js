import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Occupation({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="text"
        name="occupation"
        required
        value={value}
        onChange={onChange}
        label="Occupation"
        className="form-text-input"
      />
    </div>
  );
}
