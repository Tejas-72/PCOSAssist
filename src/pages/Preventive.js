import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Preventive.css";
import { useNavigate } from "react-router-dom";
import yoga from '../assets/yoga.png'
import food from '../assets/food.png'

function PreventiveMeasures() {
  const navigate = useNavigate();
  const clickHandler = (title) => {
      const str = `../${title}`;
      console.log(title);
      navigate({ pathname: str });
    }
  const preventiveMeasures = [
    {
      title: "Maintain a Healthy Weight",
      description:
        "Maintaining a healthy weight can help improve hormonal balance and reduce symptoms of PCOS. Regular exercise and a balanced diet are essential to maintaining a healthy weight. Incorporate strength training and aerobic exercises into your routine to help build muscle and burn fat.",
      color: "primary",
    },
    {
      title: "Healthy Diet",
      description:
        "Eating a healthy and balanced diet is important for managing PCOS. Include fiber-rich foods, such as fruits, vegetables, and whole grains in your diet. Limit processed foods, sugary drinks, and refined carbohydrates. Incorporate foods that are rich in omega-3 fatty acids, such as salmon, sardines, and walnuts, into your diet.",
      color: "success",
    },
    {
      title: "Stay Hydrated",
      description:
        "Staying hydrated is important for overall health and can help reduce symptoms of PCOS. Drink an adequate amount of water throughout the day to stay hydrated. Avoid sugary drinks and excessive caffeine, which can dehydrate the body.",
      color: "info",
    },
    {
      title: "Regular Physical Activity",
      description:
        "Engaging in regular physical activity can help improve hormonal balance and reduce symptoms of PCOS. Aim for at least 30 minutes of moderate exercise, such as brisk walking, cycling, or swimming, on most days of the week. Incorporate strength training exercises to help build muscle and improve metabolic health.",
      color: "warning",
    },
    {
      title: "Stress Management",
      description:
        "Stress can exacerbate symptoms of PCOS. Manage stress through relaxation techniques, such as deep breathing, meditation, or yoga. Engage in hobbies you enjoy and prioritize self-care activities, such as getting enough sleep and taking time for yourself.",
      color: "danger",
    },
  ];

  return (
    <Container fluid style={{backgroundColor:'#bef4e0'}}>
      <br></br><br></br><br></br>
      
      <h1 style={{paddingLeft:'30px'}}>Preventive Measures for PCOS</h1>
      <br></br><br></br>
      <Row xs={1} md={2} className="g-4" style={{paddingLeft:'120px',paddingRight:'150px'}}>
        {preventiveMeasures.map((measure, index) => (
          <Col key={index} >
            <Card className="custom-card text-center border border-3 border-success" style={{minHeight:'450px',maxWidth:'800px',backgroundColor:'#72cacd'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'50px',fontWeight:'bold'}}>{measure.title}</Card.Title> 
              <Card.Text style={{fontSize:'25px',justifyContent:'flex-start'}}>{measure.description}</Card.Text>           
            </Card.Body>
          </Card>      
          </Col>
          
        ))}
      </Row>
    </Container>
  );
}

export default PreventiveMeasures;
