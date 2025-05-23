import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
// import "./VanDetails.css"; // Import the CSS file

export default function VanDetails(){
const params=useParams();

const [van,setVan]=useState({});

useEffect(()=>{
fetch(`/api/vans/${params.id}`)
.then(res=>res.json())
.then(data=>setVan(data.van))
},[]);

return(
<div className="van-details-container">
  <div className="van-details-content">
    <div className="van-image-section">
      <div className="van-image-wrapper">
        <img src={van.imageUrl} alt={van.name} className="van-detail-image"/>
        <div className="image-overlay"></div>
      </div>
    </div>
    
    <div className="van-info-section">
      <div className="van-meta">
        <div className={`van-type-badge van-type-${van.type}`}>
          {van.type}
        </div>
        <div className="van-price-display">
          <span className="price-amount">${van.price}</span>
          <span className="price-period">/day</span>
        </div>
      </div>
      
      <h1 className="van-detail-name">{van.name}</h1>
      
      <div className="van-description">
        <p>{van.description}</p>
      </div>
      
      <div className="van-actions">
        <button className="rent-button" type="button">
          <span className="button-text">Rent this van</span>
          <span className="button-icon">→</span>
        </button>
      </div>
    </div>
  </div>
</div>
)
}