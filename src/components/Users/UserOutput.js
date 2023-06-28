import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserOutput = (props) => {
  return (
    <div>
      <Card>
        <Card.Header>Entered Details</Card.Header>
        <Card.Body>
          {props.users.map((userlist) => {
            <p key={userlist.id}>{userlist.uName}</p>;
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserOutput;
