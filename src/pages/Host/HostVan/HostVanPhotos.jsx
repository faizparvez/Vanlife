import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){

    const {currentVan}=useOutletContext();

    return (
        <div className="host-van-photos-container">
        <img src={currentVan.imageUrl}/>
        </div>
    )
}