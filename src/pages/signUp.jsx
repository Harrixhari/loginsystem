import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/signUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  };
  return (
    <Container>
      <h1>REGISTERATION FORM</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handlChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handlChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handlChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          REGISTER
        </Button>
        <p>
          Already have a Account ? <Link to="/login">login</Link>
        </p>
        {/* <Link to="/login">login</Link> */}
      </Form>
    </Container>
  );
};

export default SignUp;
