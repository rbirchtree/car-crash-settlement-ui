import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Insurance({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="text"
        name="insurance"
        required
        value={value}
        onChange={onChange}
        label="Insurance"
        className="form-text-input"
      />
    </div>
  );
}
