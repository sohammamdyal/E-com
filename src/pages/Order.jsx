import React from 'react'

const Orders = () => {
  const orders = [
    {
      orderId: "ORD1001",
      products: ["Laptop", "Headphones"],
      total: 68000,
      status: "Delivered"
    },
    {
      orderId: "ORD1002",
      products: ["Shoes", "T-shirt"],
      total: 2800,
      status: "Shipped"
    },
    {
      orderId: "ORD1003",
      products: ["Chair"],
      total: 400,
      status: "Pending"
    }
  ];

  return (
    <>
    <div style={{ padding: "20px" }} >
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p style={{ fontSize: "18px", color: "gray" }} >📦 You have no orders yet</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }} >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Order ID</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Products</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total (₹)</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{order.orderId}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {order.products.join(", ")}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>₹{order.total}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <span
                    style={{
                      color:
                        order.status === "Delivered"
                          ? "green"
                          : order.status === "Shipped"
                          ? "orange"
                          : "red"
                    }}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  )
}

export default Orders