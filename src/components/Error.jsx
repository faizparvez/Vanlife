import { useRouteError } from "react-router-dom"

export default function Error(){
    
    const error=useRouteError();
    // console.log(error);
    
    return(
        <div className="error-container">
            <h1 className="error-heading">Error: {error.message}</h1>
            <pre className="error-details">{error.status} - {error.statusText}</pre>
        </div>
    )
}