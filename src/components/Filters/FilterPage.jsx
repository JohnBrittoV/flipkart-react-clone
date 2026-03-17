import { useState } from "react";
import { FilterTab } from "./FilterTabs";
import { FilterContent } from "./FilterContent";
import { FilterFooter } from './FilterFooter';
import { useNavigate } from "react-router-dom";
import './filter.css';

import arrowIcon from '../../assets/layoutOptions/arrow.svg';

export const FilterPage = () => {
    
    const [activeTab, setActiveTab] = useState("Brand");
    const navigate = useNavigate();
    
    return(
        <div className="filter-page">
            
            <div className="filter-header">
                <span className="back-btn">
                    <img src={arrowIcon} alt="arrow icon" 
                         onClick={() => navigate(-1)}/>
                    <p>Filters</p>
                </span>
                <span className="filter-clear">
                    Clear Filters
                </span>
            </div>
            
            <div className="filter-body">
                <FilterTab activeTab={activeTab} setActiveTab={setActiveTab}/>
                <FilterContent activeTab={activeTab}/>
            </div>

            <FilterFooter/>
        </div>
    )
}