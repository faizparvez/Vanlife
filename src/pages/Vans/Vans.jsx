import { useEffect } from "react";

export default function Vans() {

useEffect(() => {
  fetch('/api/vans')
    .then(res => res.json())
    .then(json => console.log(json.vans));
}, []);



  return(
    <>
    <div>Explore our van options</div>
    </>
  )
}
