import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useSignupUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "./Signup.css";
import botImg from "../assets/prof1.png";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [name, setName] = useState("");
  const [signupUser, { isLoading, error }] = useSignupUserMutation();
  const navigate = useNavigate();
  //image upload states
  const [image, setImage] = useState(null);
  const [upladingImg, setUploadingImg] = useState(false);
  const [type, setType] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }
  const handleSelect = (e) => {
    console.log(e);
    setType(e);
  };

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "cesnqxtb");
    try {
      setUploadingImg(true);
      let res = await fetch(
        `https://api.cloudinary.com/v1_1/daglbbfyb/image/upload`,
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }
  }

  async function handleSignup(e) {
    if (password === cpassword) {
      e.preventDefault();
      if (!image) return alert("Please upload your profile picture");
      const url = await uploadImage(image);
      console.log(url);
      // signup the user
      if (type === "Student") {
        signupUser({
          name,
          email,
          password,
          picture: url,
          isAdmin: false,
        }).then(({ data }) => {
          if (data) {
            console.log(data);
            navigate("/chat");
          }
        });
      } else {
        signupUser({ name, email, password, picture: url, isAdmin: true }).then(
          ({ data }) => {
            if (data) {
              console.log(data);
              navigate("/chat");
            }
          }
        );
      }
    }
  }

  return (
    <Container fluid className="conthome" style={{paddingLeft:'300px',paddingRight:'450px',paddingTop:'100px'}}>
      <Container>
      <Row>
        <Col md={6}
         style={{padding:'70px',paddingLeft:'1px',paddingRight:'80px'}}>
        <div className="signup-profile-pic__container">
             
              <label htmlFor="image-upload" className="image-upload-label">
              <img
                src={imagePreview || botImg}
                className="signup-profile-pic"
              />
                
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
        </Col>
      
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center  "
          style={{padding:'70px',paddingLeft:'1px',paddingRight:'80px'}}
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 >Create account</h1>
                    {error && <p className="alert alert-danger">{error.data}</p>}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setCPassword(e.target.value)}
                value={cpassword}
              />
            </Form.Group>
          
              <Button variant="primary" type="submit">
                {upladingImg || isLoading ? "Registering..." : "Register"}
              </Button>
        
          </Form>
        </Col>
      
      </Row>
      </Container>
      
    </Container>
  );
}

export default Signup;
