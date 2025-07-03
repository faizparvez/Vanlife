import { useParams, Link, Outlet , useLoaderData } from "react-router-dom";
import { getHostVans } from "../mirage/api";
import { requireAuth } from "../mirage/utils";
// import { useEffect, useState } from "react";
// navlink left


export async function loader(  {params , request} ){
  await requireAuth( request )
  return getHostVans(params.id);
}


export default function HostVanLayout() {
  const params = useParams();
  // const [currentVan, setCurrentVan] = useState({});

  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.van));
  // }, [params.id]);

  const currentVan = useLoaderData();
  // console.log(data)


  return (
    <section className="host-van-layout">
      <Link to=".." relative="path" className="back-link">
        Back to all vans
      </Link>

      <div className="host-van-detail-container">
        <img
          src={currentVan.imageUrl}
          alt={currentVan.name}
          className="host-van-image"
        />
        <div className="host-van-details">
          <span
            className={`van-type-badge van-type-${currentVan.type?.toLowerCase()}`}
          >
            {currentVan.type}
          </span>
          <h2 className="host-van-name">{currentVan.name}</h2>
          <p className="host-van-price">
            ${currentVan.price}
            <span>/day</span>
          </p>
        </div>
      </div>

      <nav className="host-van-nav">
        <Link to={`/host/vans/${params.id}`} className="host-van-nav-link" end>
          Details
        </Link>
        <Link
          to={`/host/vans/${params.id}/pricing`}
          className="host-van-nav-link"
        >
          Pricing
        </Link>
        <Link
          to={`/host/vans/${params.id}/photos`}
          className="host-van-nav-link"
        >
          Photos
        </Link>
      </nav>

      <Outlet context={{ currentVan }} />
    </section>
  );
}
