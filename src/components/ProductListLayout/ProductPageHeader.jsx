import { TopLayoutOptions } from './TopLayoutOptions';
import { MainFunctionHeader } from './MainFunctionHeader';
import { ProductBanner } from './ProductBanner';

export const ProductPageHeader = ({setIsSortOpen}) => {
    return(
        <div>
            <TopLayoutOptions/>
            <MainFunctionHeader setIsSortOpen={setIsSortOpen}/>
            <ProductBanner/>
        </div>
    )
}