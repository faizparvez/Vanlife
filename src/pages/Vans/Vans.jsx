import { useEffect, useState } from "react";
import { Link, useSearchParams,useLoaderData } from "react-router-dom";
import { getVans } from "../../mirage/api";

export function loader(){
  return getVans();
}

export default function Vans() {
  // const [vans, setVans] = useState([]);

  const [searchParams,setSearchParams]=useSearchParams();
  const typefilter=searchParams.get("type");

  const vans = useLoaderData()
  
  // useEffect(() => {
  //   fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  const displayedVans=typefilter?vans.filter((van)=>{
    return (van.type===typefilter)
  }):vans;

  const vanslist = displayedVans.map((van) => {
    return (
      <div key={van.id} className="van-card">
        <Link to={`/vans/${van.id}`} state={ { search:`?${searchParams.toString()}`, type: typefilter } } >
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
        </Link>
      </div>
    );
  });


  return (
    <div className="vans-page-container">
      <div className="vans-header">
        <h1 className="vans-title">Explore our van options</h1>
        <p className="vans-subtitle">Find the perfect van for your next adventure</p>
      </div>
      <div className="van-list-filter-buttons">

        <button onClick={()=>setSearchParams({type:"simple"})} className={`van-type luxury ${typefilter==="simple"?"selected":""}`}>SIMPLE</button>
        
        <button onClick={()=>setSearchParams({type:"rugged"})} className={`van-type luxury ${typefilter==="rugged"?"selected":""}`}>RUGGED</button>
        
        <button onClick={()=>setSearchParams({type:"luxury"})} className={`van-type luxury ${typefilter==="luxury"?"selected":""}`}>LUXURY</button>
        
        {typefilter && <button onClick={()=>setSearchParams({})} className="van-type clear-filters">CLEAR FILTER</button>}
      
      </div> 
      
      <div className="vans-grid">
        {vanslist}
      </div>
    </div>
  );
}