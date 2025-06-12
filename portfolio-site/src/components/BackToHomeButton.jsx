// src/components/BackToHomeButton.jsx
import { useNavigate } from "react-router-dom";

function BackToHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 15px",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 1000
      }}
    >
      Back To Home
    </button>
  );
}

export default BackToHomeButton;
