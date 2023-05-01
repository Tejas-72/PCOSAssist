import React, { useContext, useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useLoginUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AppContext } from "../context/appContext";
import doc from '../assets/doc1.png'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { socket } = useContext(AppContext);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  function handleLogin(e) {
    e.preventDefault();
    // login logic
    loginUser({ email, password }).then(({ data }) => {
      if (data) {
        // socket work
        socket.emit("new-user");
        // navigate to the chat
        navigate("/");
      }
    });
  }
  return (
    <Container fluid className="cont " style={{paddingLeft:'430px',paddingRight:'430px',paddingTop:'10px',marginBottom:'30px'}}>

      <Row className="p-5 ">
        <Col md={6} className="login__bg">
          <img src={doc} alt="Image" style={{ width: "450px", height: "600px" }} >

          </img>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center flex-direction-column  "
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
            <h1>Sign In..</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {error && <p className="alert alert-danger">{error.data}</p>}
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
            <br />
            <div class="center">
              <Button variant="primary" type="submit">
                {isLoading ? <Spinner animation="grow" /> : "Login"}
              </Button>
            </div>
            <div className="py-4">
              <p className="text-center">
                Don't have an account ? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    
    </Container>
  );
}
export default Login;
