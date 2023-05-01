import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage'
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const clickHandler = (title, code) => {
    if (code === "diagnosis") {
      window.open("http://localhost:8501/", "_blank");
    } else {
      const str = `../${title}`;
      console.log(title);
      navigate({ pathname: str });
    }
  };

  const texts = [
    '"You are not alone." View the community forum here.',
    '"An ounce of prevention is worth a pound of cure." View the preventive measures of PCOS here.',
    '"A correct diagnosis is three-fourths the remedy." View the diagnosis tool here.',
    'Awareness'
  ];
  const user = useSelector((state) => state.user);

  return (

    <>
      <Container fluid className="conthome">
        <Container style={{maxWidth:'50%'}}>
          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_ioxlu1zt.json"
            className="player"
            loop
            autoplay
          />
        </Container>
        {user&&<LandingPage/>}
 
      </Container>
     
      
    </>
  );
}

export default Home;