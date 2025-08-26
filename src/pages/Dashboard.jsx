import React, { useEffect } from 'react'
import { Link, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear storage
    alert("Logged out successfully!");
    navigate("/signin");
  };
  return (
   <>
      <div style={{ padding: "20px" }}>
      {/* ✅ Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#f0f0f0",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        

        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* ✅ Welcome message */}
      <h1>Welcome, {user?.userName} 🎉</h1>
    </div>
   </>
  )
}

export default Dashboard