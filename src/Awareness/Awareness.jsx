import React from "react";
import "./Awareness.css";
import { useNavigate } from "react-router-dom";
import AwareCard from "./AwareCard";
import { Container, Card, Col, Row } from "react-bootstrap";

const Awareness = () => {
  const navigate = useNavigate();
  const clickHandler = (title) => {
    window.open(title);
  };

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
          <AwareCard
            onClick={clickHandler}
            code="https://www.statpearls.com/ArticleLibrary/viewarticle/27400"
            key="Forum"
            title="StatPearls article on PCOD"
          />
          <AwareCard
            onClick={clickHandler}
            code="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247486"
            key="Forum"
            title="PLOS One journal on PCOD"
          />
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

