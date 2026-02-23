import { ProductPageHeader } from '../components/ProductListLayout/ProductPageHeader';
import { ProductList } from '../components/ProductListLayout/ProductList';
import '../components/ProductListLayout/layout.css';

export const SmartPhoneList = () => {
    return(
        <div>
            <div className="layout-head">
                <ProductPageHeader/>
            </div>
                
                <ProductList/>
        </div>
    )
}