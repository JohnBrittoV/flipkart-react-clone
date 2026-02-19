import flipkartLogo from '../../assets/header/images/flipkartLogo.webp';
import flightLogo from '../../assets/header/images/TravelFlight.webp';
import flipkartTextLogo from '../../assets/header/images/FlipkartTextLogo.webp';
import TravelLogo from '../../assets/header/images/TravelLogo.webp';

export const TopBar = () => {
    return (
        <div className="header-topbar">
            <div className="header-tab header-tab-active">
                <div className="header-tab-content">
                    <img src={flipkartLogo} alt="Flipkart" className='head-tab-logo'/>
                    <img src={flipkartTextLogo} alt="Flipkart Text" className='head-img-text' />
                </div>
              
             </div>
            <div className="header-tab header-tab-inactive">
                <div className="header-tab-content">
                    <img src={flightLogo} alt="FlightBooks" className='head-tab-logo'/>
                    <img src={TravelLogo} alt="Travel Text" className='head-img-text'/>
                </div>
            </div>
        </div>
    )
}