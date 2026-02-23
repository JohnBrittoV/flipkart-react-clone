import { TopLayoutOptions } from './TopLayoutOptions';
import { MainFunctionHeader } from './MainFunctionHeader';
import { ProductBanner } from './ProductBanner';

export const ProductPageHeader = () => {
    return(
        <div>
            <TopLayoutOptions/>
            <MainFunctionHeader/>
            <ProductBanner/>
        </div>
    )
}