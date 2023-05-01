import { Container } from "react-bootstrap";
import "./AwareCard.css";
const AwareCard = (props) => {
  const onClickHandler = (event) => {
    event.preventDefault();
    props.onClick(props.code);
  };
  return (
    <div  className="card card-style">
      <center>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <button onClick={onClickHandler} className="button-style" type="Submit">
          View
        </button>
      </center>
    </div>
  );
};
export default AwareCard;
