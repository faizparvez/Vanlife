import { Link, Outlet } from "react-router-dom"

export default function HostLayout(){
    return(
        <>
        <nav className="host-nav">
            <div className="host-nav-container">
                <Link to="/host" className="host-nav-link">
                    <div className="nav-icon-wrapper">
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="9" x2="15" y2="9"/>
                            <line x1="9" y1="15" x2="15" y2="15"/>
                        </svg>
                    </div>
                    <span className="nav-text">Dashboard</span>
                </Link>
                <Link to="/host/income" className="host-nav-link">
                    <div className="nav-icon-wrapper">
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="12" y1="1" x2="12" y2="23"/>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                    </div>
                    <span className="nav-text">Income</span>
                </Link>
                <Link to="/host/vans" className="host-nav-link">
                    <div className="nav-icon-wrapper">
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                        </svg>
                    </div>
                    <span className="nav-text">Vans</span>
                </Link>
                <Link to="/host/reviews" className="host-nav-link">
                    <div className="nav-icon-wrapper">
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                    </div>
                    <span className="nav-text">Reviews</span>
                </Link>
            </div>
        </nav> 
        <main className="host-content">
            <Outlet/>
        </main>     
        </>
    )
}