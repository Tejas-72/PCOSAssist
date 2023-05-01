import React from "react";
import "./Awareness.css";
import { useNavigate } from "react-router-dom";
import AwareCard from "./AwareCard";
import { Container, Card, Col, Row } from "react-bootstrap";
import art from '../assets/arti.png'

const Awareness = () => {
  const navigate = useNavigate();

  const clickHandler = (title) => {
    if (title === "Art1") {
      const url = "https://www.statpearls.com/ArticleLibrary/viewarticle/27400/";
      const newTab = window.open(url, "_blank");
      newTab.focus();
    }else if(title=='Art2'){
      const url = " https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247486"
      const newTab = window.open(url, "_blank");
      newTab.focus();
      
    }
    else if(title=='Art3'){
      const url = " https://www.smart-academy.in/blog/pcos-its-awareness-and-prevention/?psafe_param=1&campaigntype=dynamicsearch&adgroup=healthcare&keyword=&gad=1&gclid=CjwKCAjwxr2iBhBJEiwAdXECwykTCqwLO4Br0rxkW4Zrnca00GiJnvXWmwFj-V7kWscBe91BECJJfBoChHcQAvD_BwE"
      const newTab = window.open(url, "_blank");
      newTab.focus();
     
    }
    else if(title=='Art4'){
      const url = " https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3737989/"
      const newTab = window.open(url, "_blank");
      newTab.focus();
    }
     else {
      const str = `../${title}`;
      console.log(title);
      navigate({ pathname: str });
    }}
  
  return (
    <Container fluid style={{backgroundColor:'#bef4e0'}}>
    
      <Container fluid >
        <br></br>
        <h1>PCOS- PolyCystic Ovary Syndrome</h1>
        <br></br>
        <p>
          Polycystic ovary syndrome (PCOS) is a problem with hormones that happens during the reproductive years. If you have PCOS, you may not have periods very often. Or you may have periods that last many days. You may also have too much of a hormone called androgen in your body.
        </p>
        <p>
          With PCOS, many small sacs of fluid develop along the outer edge of the ovary. These are called cysts. The small fluid-filled cysts contain immature eggs. These are called follicles. The follicles fail to regularly release eggs.
        </p>
        <p>
          The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss may lower the risk of long-term complications such as type 2 diabetes and heart disease.
        </p>
      </Container>

      <Container fluid>
      <br></br>
        <h3>Related Articles</h3>
        <div className="articles">
        <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("Art1")} style={{minHeight:'400px',minWidth:'450px'}}>
        <center>     
                    <Card.Img
              variant="top"
              src={art}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>"StatPearls article on PCOD"</Card.Title>            
            </Card.Body>
          </Card>
          <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("Art2")} style={{minHeight:'400px',minWidth:'450px'}}>
        <center>     
                    <Card.Img
              variant="top"
              src={art}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>"PLOS One journal on PCOD"</Card.Title>            
            </Card.Body>
          </Card>

          <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("Art3")} style={{minHeight:'400px',minWidth:'450px'}}>
        <center>     
                    <Card.Img
              variant="top"
              src={art}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>"Pcos-its-Awareness-and-Prevention"</Card.Title>            
            </Card.Body>
          </Card>
          <Card className="custom-card text-center border border-3 border-success" onClick={() => clickHandler("Art4")} style={{minHeight:'400px',minWidth:'450px'}}>
        <center>     
                    <Card.Img
              variant="top"
              src={art}
              style={{ width: "200px", height: "200px" }}
            />
            </center>
            <Card.Body>
              <Card.Title style={{fontSize:'30px'}}>"Polycystic Ovary Syndrome(NCBI"</Card.Title>            
            </Card.Body>
          </Card>
        
          
         
        </div>
      </Container>
      <br></br>
     
        <h3>Video Tutorials</h3>
        <br></br>
         
        <br></br>
        <br></br>
         
        <Container fluid style={{paddingLeft:'300px',paddingRight:'300px'}}>
         
          <Row>
            <Col>
           
            <iframe
              title="What is Menstruation?"
              src="https://www.youtube.com/embed/3PaswCBD9j0"
              style={{minHeight:'400px',minWidth: '550px'}}
          
            ></iframe>
          
            </Col>   
            <br></br>
          
            <Col>
          
            <iframe src="https://www.youtube.com/embed/etYDoNb4QWA" 
             style={{minHeight:'400px',minWidth: '550px'}}
          ></iframe>
          </Col>
      

          </Row>
          <br></br>
          <br></br>
         
          <Row>
            <Col>

          
            <iframe          
              title="Early signs of PCOS in Hindi"
              src="https://www.youtube.com/embed/CXenzA7XU6E"
              style={{minHeight:'400px',minWidth: '550px'}}
          
            ></iframe>
            </Col>
        
          <Col>

          
            <iframe
              src="https://www.youtube.com/embed/afVl9Zgnk8M"
              style={{minHeight:'400px',minWidth: '550px'}}
          
            ></iframe>
  
          </Col>
          </Row>
 
        </Container>

    </Container>
  );
};

export default Awareness;

