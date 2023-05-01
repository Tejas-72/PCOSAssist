import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import "./Chat.css";
import PCOSChatCommunity from "./PCOSChatCommunity";
import GetStartedButton from "../components/GetStarted";



function Chat() {
  const[chat,setChat]=useState(false)

  const onChangehandler=()=>
  {
    setChat(true)
  }

  return (
    <>
   {!chat && <Container fluid style={{backgroundColor:'#bef4e0'}}>
    
   <PCOSChatCommunity/>
  
    <center>
      <button className="btn btn-primary" onClick={onChangehandler}>Get Started</button>
      </center>
      </Container>}
  { chat&& <Container fluid={true} className="container-chat">
      <Row>
        <Col md={8}>
          <MessageForm />
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>}
    </>
  );
}

export default Chat;
