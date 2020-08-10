import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function UploadClaimBTN({ type = "success", text }) {
  const history = useHistory();

  return (
    <div>
      <Button
        color={type}
        onClick={() => {
          history.push(`submitclaim`);
        }}
      >
        {text}
      </Button>
    </div>
  );
}
