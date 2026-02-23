import barIcon from '../../assets/layoutOptions/bar.webp';
import rupeeIcon from '../../assets/layoutOptions/rupee.webp';
import rupeeIcon2 from '../../assets/layoutOptions/rupee-blue.webp';
import newArrival from '../../assets/layoutOptions/new-arrival.webp';
import offer from '../../assets/layoutOptions/offer.png';
import category from '../../assets/layoutOptions/category.webp';

export const ProductBanner = () => {
    return(
        <div className="product-banner-content">
            
            <div className="banner-box">
                <img src={barIcon} alt="bar chart"/>
                <p>5G</p>
            </div>

            <div className="banner-box">
                <img src={rupeeIcon} alt="rupee icon" />
                <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                    <p>Rs. 15000 -</p>
                    <p>Rs. 20000</p>
                </div>
            </div>

            <div className="banner-box">
                <img src={rupeeIcon2} alt="rupee icon" />
                <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                    <p>New</p>
                    <p>Launches</p>
                </div>
            </div>
        </div>
    )
}

export const ProductForNew = () => {
    return(
        <div className="product-banner-content">

            <div className="banner-box">
                <img src={newArrival} alt="New arrival"/>
                <div style={{display:"flex", flexDirection: "column", gap: "5px"}}>
                    <p>New</p>
                    <p>Arrivals</p>
                </div>
            </div>

            <div className="banner-box">
                <img src={offer} alt="offer card" />
                <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                    <p>50%or</p>
                    <p>more</p>
                </div>
            </div>

            <div className='banner-box'>
                <img src={category} alt="feature" />
                <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                    <p>Fast</p>
                    <p>Charging</p>
                </div>
            </div>

            <div className="banner-box">
                <img src={category} alt="Noise Cancellation" />
                <div style={{display:"flex", flexDirection: "column", gap: "5px"}}>
                    <p>Noise</p>
                    <p>Cancellation</p>
                </div>
            </div>

        </div>
    )
}