import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import forum from "./comm.png";
import { useSelector } from "react-redux";
import dia from "./diag.png";
import prevent from "./prev1.png";
import aware from "./awar.png"
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const clickHandler = (title) => {
    // if (title === "diagnosis") {
    //   const url = "http://localhost:8501/";
    //   const newTab = window.open(url, "_blank");
    //   newTab.focus();
    // } else {
      const str = `../${title}`;
      console.log(title);
      navigate({ pathname: str });
    }
  
  const user = useSelector((state) => state.user);

  const texts = [
    '"You are not alone." ',
    '"An ounce of prevention is worth a pound of cure."',
    '"A correct diagnosis is three-fourths the remedy."',
  ];

  return (
    <Container fluid style={{background:" #bef4e0",paddingLeft:'270px',paddingRight:'270px',marginTop:'5px',paddingBottom:'100px'}}>
      <center>
      <Row className="justify-content-center">
        <Col md={6}>
         {user&& <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("chat")} style={{minHeight:'400px',maxWidth:'600px'}}>
            <center>     
                    <Card.Img
              variant="top"
              src={forum}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
 
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>Community Forum</Card.Title>            
            </Card.Body>
          </Card>}
        </Col>
        <Col md={6}>
         {user && <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() => clickHandler("preventive")}
            style={{minHeight:'400px',maxWidth:'600px'}}
          >
            <center>
            <Card.Img
              variant="top"
              src={prevent}
              style={{ width: "250px", height: "200px" }}
            />
            </center>
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>Preventive Measures</Card.Title>
            
              
            </Card.Body>
          </Card>}
        </Col>
        </Row>
        <Row className="justify-content-center">
        
        <Col md={6}>
         {user&& <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() => clickHandler("diagnosis")}
            style={{minHeight:'400px',maxWidth:'600px'}}
          >
            <center>
            <Card.Img
              variant="top"
              src={dia}
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>Diagnosis</Card.Title>
           
              
            </Card.Body>
            </center>
          </Card>}
        </Col>
        <Col md={6}>
         {user&& <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() => clickHandler("awareness")}
            style={{minHeight:'400px',maxWidth:'600px'}}
          >
            <center>
            <Card.Img
              variant="top"
              src={aware}
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            </center>
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}} >Awareness</Card.Title>
                        </Card.Body>
          </Card>}
        </Col>
      </Row>
      </center>
    </Container>
  );
};

export default LandingPage;
