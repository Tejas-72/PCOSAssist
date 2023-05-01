import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Preventive.css";
import { useNavigate } from "react-router-dom";
import yoga from '../assets/yoga.png'
import food from '../assets/diet.png'
import meas from '../assets/meas.png'

function Prevent() {
  const navigate = useNavigate();
  const clickHandler = (title) => {
      const str = `../${title}`;
      console.log(title);
      navigate({ pathname: str });
    }
    return (
        <Container fluid style={{backgroundColor:'#bef4e0'}}>
          <br></br><br></br><br></br>
          
          <h1 style={{paddingLeft:'30px'}}>Preventive Measures for PCOS</h1>
          <br></br><br></br>
          <Row xs={1} md={2} className="g-4" style={{paddingLeft:'120px',paddingRight:'150px'}}>
            <Col md={4}>
            <Card
                className="custom-card text-center border border-3 border-success"
                onClick={() => clickHandler("yoga")}
                style={{minHeight:'400px',maxWidth:'600px'}}
              >
                <center>
                <Card.Img
                  variant="top"
                  src={yoga}
                  style={{
                    width: "250px",
                    height: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                </center>
                <Card.Body>
                  <Card.Title style={{fontSize:'30px'}} >Yoga & Lifestyle</Card.Title>
                            </Card.Body>
              </Card>
              </Col>
              <Col md={4}>
              <Card
                className="custom-card text-center border border-3 border-success"
                onClick={() => clickHandler("food")}
                style={{minHeight:'400px',maxWidth:'600px'}}
              >
                <center>
                <Card.Img
                  variant="top"
                  src={food}
                  style={{
                    width: "260px",
                    height: "260px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                </center>
                <Card.Body>
                  <Card.Title style={{fontSize:'30px'}} >Diet</Card.Title>
                            </Card.Body>
              </Card>
              </Col>
              <Col md={4}>
              <Card
                className="custom-card text-center border border-3 border-success"
                onClick={() => clickHandler("prevn")}
                style={{minHeight:'400px',maxWidth:'600px'}}
              >
                <center>
                <Card.Img
                  variant="top"
                  src={meas}
                  style={{
                    width: "250px",
                    height: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                </center>
                <Card.Body>
                  <Card.Title style={{fontSize:'30px'}} >Basic Measures</Card.Title>
                            </Card.Body>
              </Card>
              </Col>
              </Row>
    </Container>
  );
}

export default Prevent;
