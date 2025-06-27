import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
import { getVans } from "../../mirage/api";
// import "./VanDetails.css"; // Import the CSS file


export function loader( { params } ) {
  // console.log(params);
  return getVans(params.id);
}



export default function VanDetails() {
  // const params = useParams();
  // const [van, setVan] = useState({});

  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.van));
  // }, []);

  
  
  
  const location = useLocation();
  // console.log(location)
  const van = useLoaderData();
  // console.log(van);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-details-container">
      <Link to={`..${search}`} relative="path" className="back-link spacing">
        Back to {type} vans
      </Link>

      <div className="van-details-content">
        <div className="van-image-section">
          <div className="van-image-wrapper">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="van-detail-image"
            />
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
  );
}