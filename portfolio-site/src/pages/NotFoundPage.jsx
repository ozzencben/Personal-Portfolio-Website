import React from "react";
import FuzzyText from '../components/FuzzyText'

const NotFoundPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <FuzzyText fontSize="clamp(3rem, 10vw, 10rem)">404</FuzzyText>
      <p style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
        NOT FOUND
      </p>
    </div>
  );
};

export default NotFoundPage;
