import { smartphones } from '../../data/smartphones';
import { ProductCard } from '../ProductListLayout/ProductCard';

export const ProductList = () => {
    return(
        <div>
            {smartphones.map((item) => (
                <ProductCard key={item.id} product={item}/>
            ))}
        </div>
    )
}