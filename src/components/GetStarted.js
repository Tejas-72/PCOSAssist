import React from "react";
import { CSSTransition } from "react-transition-group";

function GetStartedButton() {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <CSSTransition in={showButton} timeout={500} classNames="button-transition" unmountOnExit>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        className="get-started-button"
      >
        Get Started
      </button>
    </CSSTransition>
  );
}

export default GetStartedButton;
