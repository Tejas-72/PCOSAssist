import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo7.png";
import "./Nav.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Navigation() {
  const [show, setShow] = useState(false);
  const url = "http://localhost:8501/";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();

  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }

  const openDiagnosisInNewTab = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar className="container-nav border border-1 rounded border-dark" >
        <Container fluid>
          <LinkContainer to="/">
            <Nav.Link>
              <div className="divcont" style={{ display: "flex" }}>
                <img src={logo} style={{ width: 80, height: 70 }} alt="Logo" />
                <span
                  style={{
                    fontSize: "40px",
                    paddingLeft: "15px",
                    paddingBottom: "8px",
                    color: "black",
                  }}
                >
                  PCOSAssist :{" "}
                  <span
                    style={{
                      fontSize: "25px",
                      paddingBottom: "10px",
                    }}
                  >
                    An Assistive PCOS Detection Platform
                  </span>
                </span>
              </div>
            </Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            {!user && (
                <LinkContainer to="/awareness">
                  <Nav.Link><span className="border border-3 rounded border-dark " style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Awareness Tutorials</span></Nav.Link>
                </LinkContainer>
              )}
              
              {!user && (
                <LinkContainer to="/login" >
                  <Nav.Link><span className="border border-3 rounded border-dark" style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Login</span></Nav.Link>
                </LinkContainer>
              )}
              {!user && (
                <LinkContainer to="/signup">
                  <Nav.Link><span className="border border-3 rounded border-dark" style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Register</span></Nav.Link>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/chat">
                  <Nav.Link><span className="border border-3 rounded border-dark " style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Community Forum</span></Nav.Link>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/diagnosis">
                <Nav.Link ><span className="border border-3 rounded border-dark " style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Diagnosis</span></Nav.Link>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/preventive">
                  <Nav.Link><span className="border border-3 rounded border-dark " style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Preventive Measures</span></Nav.Link>
                </LinkContainer>
              )}
              {user && (
                <LinkContainer to="/awareness">
                  <Nav.Link><span className="border border-3 rounded border-dark " style={{color:'black',textDecoration: "none",padding:'8px',paddingTop:'5px',maxWidth:'60px'}}>Awareness Tutorials</span></Nav.Link>
                </LinkContainer>
              )}
              {user && (
                <NavDropdown
                
                  title={
                    <>
                      <img
                      
                        src={String(user.picture)}
                        style={{
                          width: 30,
                          height: 30,
                          marginRight: 10,
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        alt="Profile"
                      />
                      {user.name}
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item onClick={handleShow}>
                    My profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {user && (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Container className="contimges">
              <img className="contimg" src={user.picture} alt="Profile" />
            </Container>
            <Container className="contprof">Name - {user.name}</Container>
            <Container className="contprof">Email - {user.email}</Container>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )}
  </>
);
    }
export default Navigation;
