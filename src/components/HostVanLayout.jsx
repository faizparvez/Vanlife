import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostVanLayout() {
  const params = useParams();

  const [currentVan, setCurrentVan] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.van));
  }, []);

  return (
    <div>

    </div>
  );
}
