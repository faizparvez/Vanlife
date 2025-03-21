import {Link,Outlet} from "react-router-dom"

export default function Hostlayout(){
    return (
        <>
        <nav className="hostnavbar">
         <Link to="income">Income</Link>
         <Link to="vans">Vans</Link>
         <Link to="reviews">Reviews</Link>
        </nav>

        <Outlet/>
        </>
    )
}