import { useEffect, useState } from "react";

export default function Vans() {
  const [vans, setvans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setvans(data.vans));
  }, []);

  console.log(vans);

  const vanslist = vans.map((van) => {
    return (
      <div key={van.id} className="van-card">
        <div className="van-image-container">
          <img src={van.imageUrl} className="van-image" alt={van.name} />
        </div>
        <div className="van-info">
          <h3 className="van-name">{van.name}</h3>
          <div className="van-price-type">
            <p className="van-price">${van.price}<span>/day</span></p>
            <span className={`van-type van-type-${van.type.toLowerCase()}`}>
              {van.type}
            </span>
          </div>
        </div>
      </div>
    );
  });

  
  return (
    <div className="vans-page-container">
      <div className="vans-header">
        <h1 className="vans-title">Explore our van options</h1>
        <p className="vans-subtitle">Find the perfect van for your next adventure</p>
      </div>
      <div className="vans-grid">
        {vanslist}
      </div>
    </div>
  );
}