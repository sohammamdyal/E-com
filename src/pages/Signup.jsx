import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const navigate =  useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      userName,
      userEmail,
      userPassword,
    };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful! Redirecting to login...");
    navigate("/signin"); // redirect to login page
    console.log(userData);
  }
  return (
   <>
    <div 
  style={{
    padding: "30px",
    maxWidth: "400px",
    margin: "50px auto",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    background: "#fff",
    fontFamily: "Arial, sans-serif"
  }}
>
  <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
    Signup
  </h1>

  <form onSubmit={handleSubmit}>
    {/* Name */}
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", color: "#555" }}>
        Name
      </label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #007BFF")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />
    </div>

    {/* Email */}
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", color: "#555" }}>
        Email
      </label>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #007BFF")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />
    </div>

    {/* Password */}
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", color: "#555" }}>
        Password
      </label>
      <input
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #007BFF")}
        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "#007BFF",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
      onMouseLeave={(e) => (e.target.style.background = "#007BFF")}
    >
      Signup
    </button>

    <p className='text-center '>Already have an account? <Link to="/signin" className='text-dark text-decoration-none'>Login</Link></p>
  </form>
</div>


   </>
  )
}

export default Signup