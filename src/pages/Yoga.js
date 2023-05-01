import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Preventive.css";
import { useNavigate } from "react-router-dom";
import badha from "../assets/yoga/Baddha.png";
import bala from "../assets/yoga/Balasana.png";
import bhuja from "../assets/yoga/Bhujanga.png";
import dhanu from "../assets/yoga/Dhanu.png";
import sethu from "../assets/yoga/Sethu.png";
import mala from "../assets/yoga/Malasana.png";
import prasarita from "../assets/yoga/Prasarita.png";
import sarva from "../assets/yoga/Sarvanga.png";
import Gomukha from "../assets/yoga/Gomukha.png";
import surya from "../assets/yoga/Surya.png";
import chandra from "../assets/yoga/Chandra.png";
import janu from "../assets/yoga/Janu.png";

function Yoga() {
  const navigate = useNavigate();
  const clickHandler = (title) => {
    const str = `../${title}`;
    console.log(title);
    // navigate({ pathname: str });
    window.open(title);
  };

  return (
    <Container fluid style={{ backgroundColor: "#bef4e0" }}>
      <br></br>
      <br></br>
      <br></br>

      <h1 style={{ paddingLeft: "30px" }}>Yoga poses for PCOS</h1>
      <br></br>
      <br></br>

      <Row
        xs={1}
        md={2}
        className="g-4"
        onClick={() =>
          clickHandler("https://www.youtube.com/watch?v=AbPufvvYiSw")
        }
        style={{ paddingLeft: "120px", paddingRight: "150px" }}
      >
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={surya}
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
              <Card.Title style={{ fontSize: "30px" }}>
                Sun Salutation
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler(
                "https://www.youtube.com/watch?v=qLPRDus9zzg&list=PLoZ9lCw2MJU_Wbw6PaaqIdbbTH2p3UbHX&index=41"
              )
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={janu}
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
              <Card.Title style={{ fontSize: "30px" }}>
                Janu Shirasasana
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=x-QxVypp86U")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={chandra}
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
              <Card.Title style={{ fontSize: "30px" }}>
                Moon Salutation
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4"
        onClick={() => clickHandler("yoga")}
        style={{ paddingLeft: "120px", paddingRight: "150px" }}
      >
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=hRcvSEtoecg")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={badha}
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
              <Card.Title style={{ fontSize: "30px" }}>
                Baddha Konasana
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=2MJGg-dUKh0")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={bala}
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
              <Card.Title style={{ fontSize: "30px" }}>Balasana</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=fOdrW7nf9gw")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={bhuja}
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
              <Card.Title style={{ fontSize: "30px" }}>Bhujangasana</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4"
        onClick={() => clickHandler("yoga")}
        style={{ paddingLeft: "120px", paddingRight: "150px" }}
      >
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler(
                "https://www.youtube.com/watch?v=4P2mYcOGxbU&list=PLoZ9lCw2MJU_Wbw6PaaqIdbbTH2p3UbHX&index=8"
              )
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={dhanu}
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
              <Card.Title style={{ fontSize: "30px" }}>Dhanurasana</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=g78vfuC4QBI")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={sethu}
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
              <Card.Title style={{ fontSize: "30px" }}>
                Sethu Bandhasana
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=goJthOXs9ZU")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={mala}
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
              <Card.Title style={{ fontSize: "30px" }}>Malasana</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row
        xs={1}
        md={2}
        className="g-4"
        onClick={() => clickHandler("yoga")}
        style={{ paddingLeft: "120px", paddingRight: "150px" }}
      >
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=0WUqeNGPj0w")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={prasarita}
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
              <Card.Title style={{ fontSize: "30px" }}>
                Prasaritha Padothanasana
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler("https://www.youtube.com/watch?v=g3wvIPXZ-Qo")
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={sarva}
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
              <Card.Title style={{ fontSize: "30px" }}>Sarvangasana</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="custom-card text-center border border-3 border-success"
            onClick={() =>
              clickHandler(
                "https://www.youtube.com/watch?v=d_dh_DwDr84&list=PLoZ9lCw2MJU_Wbw6PaaqIdbbTH2p3UbHX&index=12"
              )
            }
            style={{ minHeight: "400px", maxWidth: "600px" }}
          >
            <center>
              <Card.Img
                variant="top"
                src={Gomukha}
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
              <Card.Title style={{ fontSize: "30px" }}>Gomukhasana</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Yoga;
