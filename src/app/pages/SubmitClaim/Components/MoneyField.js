import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

export default function MoneyField({ amt, setAmt }) {
  return (
    <CurrencyTextField
      value={amt}
      currencySymbol="$"
      minimumValue="0"
      style={{ width: "100px" }}
      outputFormat="number"
      decimalCharacter="."
      digitGroupSeparator=","
      onChange={(event, value) => {
        setAmt(value);
      }}
      inputProps={{
        style: {
          textAlign: "center",
        },
      }}
      className="form-text-input"
    />
  );
}
