import { smartphones } from '../../data/smartphones';
import { ProductCard } from '../ProductListLayout/ProductCard';

export const ProductList = ({sortOption}) => {
    
    const sortedProducts = [...smartphones].sort((a, b) => {

        switch (sortOption) {

            case "Price Low to High":
                return a.price - b.price;

            case "Price High to Low":
                return b.price - a.price;

            case "Popularity":
                return b.ratingCount - a.ratingCount;

            case "Newest First":
                return b.id - a.id;

            default:
                return 0;

        }
    })
    
    
    return(
        <div>
            {sortedProducts.map((item) => (
                <ProductCard key={item.id} product={item}/>
            ))}
        </div>
    )
}