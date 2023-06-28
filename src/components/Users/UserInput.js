import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserInput = () => {
  return (
    <div>
      <Card>
        <Card.Header>Enter Details</Card.Header>
        <Card.Body>
          <input type="string" placeholder="UserName" />
          <input type="number" placeholder="Age" />
          <Button variant="primary">Go </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserInput;
