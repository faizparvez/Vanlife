import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Adventure Awaits with VANGO</h1>
      <p>
        You've got the wanderlust, we've got the perfect wheels.
        <br /><br />
        Rent the ideal van for your next unforgettable journey.
      </p>
      <Link to="/vans" className="cta-button">
        Discover Your Van
      </Link>
    </div>
  );
}