import { useOutletContext } from "react-router-dom";

export default function HostVanDetails() {
    const { currentVan } = useOutletContext();

    return (
        <div className="van-details-container">
            <div className="detail-card">
                <div className="detail-group">
                    <span className="detail-label">NAME</span>
                    <h3 className="detail-value">{currentVan.name}</h3>
                </div>

                <div className="detail-group">
                    <span className="detail-label">CATEGORY</span>
                    <div className={`van-type-badge type-${currentVan.type?.toLowerCase()}`}>
                        {currentVan.type}
                    </div>
                </div>

                <div className="detail-group">
                    <span className="detail-label">DESCRIPTION</span>
                    <p className="detail-description">{currentVan.description}</p>
                </div>

                <div className="detail-group">
                    <span className="detail-label">VISIBILITY</span>
                    <div className="visibility-badge">
                        <span className="visibility-dot"></span>
                        Public
                    </div>
                </div>
            </div>
        </div>
    )
}