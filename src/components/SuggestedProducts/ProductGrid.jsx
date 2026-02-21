import { ProductCard } from './ProductCard';
import arrow from '../../assets/Suggested/icons/arrow-left.svg';
import './Suggestions.css'

export const ProductGrid = ({products, title}) => {
    return(
        <div className='suggested-container'>

            {title && (
                <div className='suggested-head'>
                    <div className="suggested-title">
                        <p>{title}</p>
                    </div>
                    <div className="suggested-view">
                        <img src={arrow} alt="arrow left" />
                    </div>
                </div>
            )}

            <div className="sugg-product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}