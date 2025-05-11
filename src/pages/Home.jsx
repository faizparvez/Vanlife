import { Link } from "react-router-dom"

export default function Home() { 
  return(
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>
            You got the travel plans, we got the <span className="travel-vans">
              <span className="travel">travel</span> <span className="vans">vans</span><span className="period">.</span>
            </span>
          </h1>
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans">FIND YOUR VAN</Link>
        </div>
        <div className="home-image">
          <img src="/van.avif" alt="Adventure van on a scenic road" />
        </div>
      </div>
    </div>
  )
}