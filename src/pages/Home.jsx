import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/home.css";

const Home = () => {
  return (
    <Container>
      <h1>WELCOME</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta
        nisi odit praesentium ipsam nesciunt blanditiis, assumenda laudantium
        distinctio itaque ipsa, ratione fuga officiis, nostrum id accusamus quis
        laboriosam vero!
      </p>
      <Button>Get Started</Button>
    </Container>
  );
};

export default Home;
