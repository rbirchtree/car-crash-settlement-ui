import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import Accident from "./Components/Accident";

export default function AccidentDetails(id) {
  useEffect(() => {});

  return (
    <div>
      <h1>Accident Details</h1>
      <Accident />
    </div>
  );
}
