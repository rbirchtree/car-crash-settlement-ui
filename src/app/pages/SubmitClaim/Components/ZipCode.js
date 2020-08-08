import React from "react";
import TextField from "@material-ui/core/TextField";

export default function ZipCode({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="zipcodeofaccident"
        required
        value={value}
        onChange={onChange}
        label="Zip Code of Accident"
        className="form-text-input"
      />
    </div>
  );
}
