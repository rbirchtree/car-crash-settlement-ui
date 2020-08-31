import React from "react";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import Grid from "@material-ui/core/Grid";

const styles = {
  Grid: { padding: "20px" },
};

export default function MoneyField({ label, amt, setAmt }) {
  return (
    <Grid item xs={12} sm={6} style={styles.Grid}>
      <span>{label}</span>
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
      />
    </Grid>
  );
}
