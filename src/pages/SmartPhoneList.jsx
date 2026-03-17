import { useState } from 'react';
import { ProductPageHeader } from '../components/ProductListLayout/ProductPageHeader';
import { ProductList } from '../components/ProductListLayout/ProductList';
import { SortPopup } from '../components/SortPopup/SortPopup.jsx';
import '../components/ProductListLayout/layout.css';

export const SmartPhoneList = () => {
    
    const [sortOption, setSortOption] = useState('Relevance');
    const [isSortOpen, setIsSortOpen] = useState(false);
    
    return(
        <div>
            <div className="layout-head">
                <ProductPageHeader setIsSortOpen = {setIsSortOpen}/>
            </div>
                
                <ProductList sortOption={sortOption}/>

                {isSortOpen && (
                    <SortPopup
                        sortOption = {sortOption}
                        setSortOption = {setSortOption}
                        closePopup= {() => setIsSortOpen(false)}/>
                )}
        </div>
    )
}