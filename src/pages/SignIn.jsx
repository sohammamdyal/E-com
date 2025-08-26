import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedData = JSON.parse(localStorage.getItem("user"));

        if(storedData) {
            if(storedData.userEmail === email && storedData.userPassword === password ) {
             
                alert("Login Successfull");
                navigate("/dashboard");
            }
            else{
               console.log("❌ Invalid email or password");
            }
        }else{
            console.log("⚠ No user found! Please signup first.");
            navigate("/signup");
        }
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
    Login
  </h1>

  <form onSubmit={handleLogin}>
    {/* Email */}
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", color: "#555" }}>
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      Login
    </button>

    <p className='text-center text-gray-600'>Don't have an account? <a href="/signup" className='text-decoration-none text-dark'>Sign Up</a></p>
  </form>
</div>

    </>
  )
}

export default SignIn
