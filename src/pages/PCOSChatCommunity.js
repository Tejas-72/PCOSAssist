import React from "react";
import { Container, Card } from "react-bootstrap";

function PCOSChatCommunity() {
  return (
    <Container fluid style={{ padding: "20px", paddingLeft: "400px", paddingRight: "400px" }}>
      <Card bg="light" text="dark" border="success" rounded style={{ backgroundColor: "#90daad"}}>
        <Card.Body>
          <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "24px" }}>PCOS Chat Community</h1>
          <br />
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
            The PCOS (Polycystic Ovary Syndrome) Chat Community is an online platform dedicated to providing support, information, and a sense of community for individuals affected by PCOS. PCOS is a hormonal disorder that affects many women, and this chat community aims to create a safe and inclusive space for them to connect, share experiences, and seek guidance.
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
            In this chat community, members can engage in discussions about various topics related to PCOS, including symptoms, diagnosis, treatment options, lifestyle changes, emotional well-being, fertility concerns, and more. Whether someone is newly diagnosed, seeking advice, or simply looking for a supportive network, this chat community offers a platform for individuals to connect with others who understand their journey.
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
            Members can share their stories, ask questions, and receive support from fellow community members who have firsthand experience with PCOS. They can exchange tips, resources, and coping strategies to manage PCOS symptoms and improve overall quality of life. Additionally, the community may feature health professionals or experts who can provide valuable insights and answer questions.
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
            By fostering a sense of belonging and understanding, the PCOS Chat Community aims to empower individuals with knowledge, encourage self-care practices, and promote advocacy for PCOS awareness. Whether it's finding encouragement, learning about new research, or seeking emotional support, the community serves as a virtual hub for individuals affected by PCOS to connect, learn, and grow together.
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
            Please note that while the chat community can provide valuable support and information, it is essential to consult with healthcare professionals for personalized advice and medical guidance regarding PCOS.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PCOSChatCommunity;
