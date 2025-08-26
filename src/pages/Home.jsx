import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My Website</h1>
      <p style={styles.text}>
        This is the homepage built with <strong>React.js</strong>.
      </p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
  },
};

export default Home;
