import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const styles = {
  Grid: { padding: "20px" },
  TextField: {
    width: "50px",
  },
  TextFieldInput: {
    textAlign: "center",
  },
};

export default function NumberField({
  label,
  unit,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <Grid item xs={12} sm={6} style={styles.Grid}>
      <span>{label}</span>
      <TextField
        name={name}
        inputProps={{ style: styles.TextFieldInput }}
        style={styles.TextField}
        value={value}
        onChange={onChange}
        helperText={error}
        error={error}
      />
      <span>{unit}</span>
    </Grid>
  );
}
