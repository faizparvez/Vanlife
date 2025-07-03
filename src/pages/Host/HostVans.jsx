// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../mirage/api";
import { requireAuth } from "../../mirage/utils";

export async function loader( {request} ) {
  await requireAuth( request )
  return getHostVans();
}

export default function HostVans() {
  // const [hostVans, setHostVans] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const id = "123";
  // useEffect(() => {
  //   fetch(`/api/hosts/${id}/vans`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHostVans(data.vans);
  //       setIsLoading(false);
  //     });
  // }, []);


  const hostVans = useLoaderData();
  // console.log(hostVans);

  const displayVans = hostVans.map((van) => {
    return (
      <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van-link">
        <div className="host-van-card">
          <div className="host-van-image-container">
            <img src={van.imageUrl} alt={van.name} className="host-van-image" />
          </div>
          <div className="host-van-info">
            <h2 className="host-van-name">{van.name}</h2>
            <div className="host-van-price">
              ${van.price}
              <span>/day</span>
            </div>
            <div
              className={`host-van-type host-van-type-${van.type.toLowerCase()}`}
            >
              {van.type}
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-vans-container">
      <div className="host-vans-header">
        <h1 className="host-vans-title">Your Listed Vans</h1>
        {hostVans.length > 0 && (
          <p className="host-vans-subtitle">Manage your rental fleet</p>
        )}
      </div>

      <div className="host-vans-grid">
        {/* {isLoading ? (
          <div className="host-vans-loading">
            <div className="loading-spinner"></div>
            <p>Loading your vans...</p>
          </div>
        ) :   */}
        {hostVans.length > 0 ? (
          displayVans
        ) : (
          <div className="host-vans-empty">
            <p>You haven't listed any vans yet.</p>
            <Link to="/host/vans/new" className="host-vans-add-button">
              List Your First Van
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
