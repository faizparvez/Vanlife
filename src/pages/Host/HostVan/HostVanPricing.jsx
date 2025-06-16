import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const { currentVan } = useOutletContext();
    
    return (
        <div className="host-van-pricing">
            <div className="pricing-section">
                <h3 className="pricing-heading">Pricing</h3>
                <div className="price-display">
                    <span className="price-amount">${currentVan.price}</span>
                    <span className="price-period">/day</span>
                </div>
            </div>
        </div>
    )
}