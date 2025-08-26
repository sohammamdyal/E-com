import React from 'react'

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: 65000,
      category: "Electronics",
      image: "https://image.made-in-china.com/202f0j00YqGpDvdPsQub/Computer-Hardware-Intel-Core-I7-Win10-Loptop-15-6-Inch-USB-WiFi-Laptop.webp"
    },
    {
      id: 2,
      name: "Keyboard",
      price: 2000,
      category: "Fashion",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT9jXzQ8W7kDdx_mjx9qcc7y8XeMNnK6jMCvfHySeh-OpmufssJAhKSU3v2cxirmBopNuNjaWJrlRAbjF3BzQdyU4fP6sp0VP6H7AQFjPSxsBgTLGv4sjz6aw"
    }
  ];
  return (
    <>
     <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ fontSize: "18px", color: "gray" }}>🛒 Your cart is empty</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {cartItems.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
              <img src={item.image} alt={item.name} width="120" />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Category: {item.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Cart