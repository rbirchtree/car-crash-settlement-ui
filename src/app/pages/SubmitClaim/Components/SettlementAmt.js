import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SettlementAmt({ onChange, value }) {
  return (
    <div>
      <TextField
        variant="outlined"
        type="number"
        name="settlementamt"
        required
        value={value}
        onChange={onChange}
        label="Settlement Amount"
        className="form-text-input"
      />
    </div>
  );
}
