import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import doc from '../assets/doc_nur.png'
import pat from '../assets/patient.png'


const Diagnosis = () => {
  const navigate = useNavigate();

  const clickHandler = (title) => {
    if (title === "doctor") {
      const url = "http://localhost:8081/";
      const newTab = window.open(url, "_blank");
      newTab.focus();
    } else if( title === "patient"){
      const url = "http://localhost:8080/";
      const newTab = window.open(url, "_blank");
      newTab.focus();
    }
  };
  return (
    <div>
   <Container fluid style={{paddingLeft:'260px',paddingRight:'260px',paddingTop:'200px',backgroundColor:'#bef4e0'}}>
    <Row>
      <Col md={6}>
      <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("doctor")} style={{minHeight:'400px',maxWidth:'600px'}}>
            <center>     
                    <Card.Img
              variant="top"
              src={doc}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
 
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>Doctor</Card.Title>            
            </Card.Body>
          </Card>
      
      </Col>
      <Col md={6}>
      <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("patient")} style={{minHeight:'400px',maxWidth:'600px'}}>
            <center>     
                    <Card.Img
              variant="top"
              src={pat}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
 
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>Patient</Card.Title>            
            </Card.Body>
          </Card>
      
      </Col>
    </Row>
   </Container>
  
    </div>
  )
}

export default Diagnosis
