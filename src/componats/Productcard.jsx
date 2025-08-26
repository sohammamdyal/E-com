import React from 'react'
import {useNavigate} from 'react-router-dom'


const Productcard = (props) => {

  const navigate = useNavigate()
  console.log(props)
  return (
    <>
    <div 
  className="card text-center border-0 shadow-lg rounded-4 overflow-hidden h-100"
  style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
  onMouseEnter={e => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  }}
>
  {/* Card Header */}
  <div className="card-header bg-primary text-white py-3">
    <h2 className="text-uppercase fw-bold m-0">{props.name}</h2>
  </div>

  {/* Card Body */}
  <div className="card-body p-4">
    <img 
      className="img-fluid rounded-3 mb-3" 
      src={props.img} 
      alt={props.name} 
      style={{ height: 250, objectFit: "cover", width: "100%" }} 
    />
    <div>
      <p className="text-muted mb-1">{props.cat}</p>
      <p className="fw-semibold text-success mb-2">₹ {props.price}</p>
      <h5 className="text-uppercase fw-bold">{props.des}</h5>
    </div>
  </div>

  {/* Card Footer */}
  <div className="card-footer bg-light border-0 py-3">
    <button 
      className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      View Product
    </button>
  </div>
</div>
    
    </>
  )
}

export default Productcard