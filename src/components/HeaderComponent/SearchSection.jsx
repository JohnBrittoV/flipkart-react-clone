 import location from "../../assets/header/icons/location.svg";
 import arrowIcon from "../../assets/header/icons/arrow-right.svg";
 import searchIcon from "../../assets/header/icons/search-icon.svg";

export const SearchSection = () => {
   
    return(
        <>
        <div className="head-search-section">
                <img src={location} alt="Search icon" />
                <p className="head-location-text text-style">Location not set</p>
                <p className="head-select-location text-style">Select delivery location</p>
                <img src={arrowIcon} alt="arrow" />
        </div>
        
        <div className="search-box-container"> 
            <div className="search-box">
                <div className="search-icon">
                    <img src={searchIcon} alt="search icon" />
                </div>
                <div className="search-input">
                    <p className="search-input-text">Search for Products</p>
                </div>
            </div>
        </div>
        </>
    )
}