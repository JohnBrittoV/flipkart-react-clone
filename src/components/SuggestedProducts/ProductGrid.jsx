import './Suggestions.css'
import { ProductCard } from './ProductCard';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/Suggested/icons/arrow-left.svg';


export const ProductGrid = ({products, title, setview}) => {
    const navigate = useNavigate();
    return(
        <div className='suggested-container'>

            {title && (
                <div className='suggested-head'>
                    <div className="suggested-title" >
                        <p>{title}</p>
                    </div>
                    <div className="suggested-view" 
                         onClick={() => setview === 'smartphones' ? navigate("/smartphones") : navigate("/earbuds")}>
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