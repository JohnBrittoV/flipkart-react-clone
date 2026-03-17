import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sortIcon from '../../assets/layoutOptions/sort-icon.svg';
import filterIcon from '../../assets/layoutOptions/filter-icon.svg';
import './layout.css';

export const MainFunctionHeader = ({ setIsSortOpen }) => {
    
    const navigator = useNavigate();
    return(
        <div className="mainfunction-container">
            
            <div className="mainfunction-items" onClick={() => setIsSortOpen(true)}>
                <img src={sortIcon} alt="sort-icon" style={{marginRight:"4px"}} />
                <p className='function-title'>Sort</p>
            </div>

            <div style={{height: "16px", width:"1px", backgroundColor:"#d5d7db"}}></div>
            
            <div className="mainfunction-items" 
                 onClick={() => navigator('/filter')}>
                <img src={filterIcon} alt="filter-icon" />
                <p className="function-title">Filter</p>
            </div>

        </div>
    )
}