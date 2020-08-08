import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Notes({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="text"
        name="notes"
        required
        value={value}
        onChange={onChange}
        label="Notes"
        className="form-text-input"
      />
    </div>
  );
}
