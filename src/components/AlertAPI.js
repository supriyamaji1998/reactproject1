import React from "react";
import Alert from "react-bootstrap/Alert";
function AlertAPI(props) {
  return (
    <div>
      {props.alert && (
        <Alert variant={props.alert.type}>{props.alert.message}</Alert>
      )}
    </div>
  );
}

export default AlertAPI;
