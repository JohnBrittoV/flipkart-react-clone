import { OfferCard } from './OfferCard';
import arrow from '../../assets/Suggested/icons/arrow-left.svg';
import './offer.css';

export const Offers = ({products, title, bgcolor}) => {
    return( 
        
        <div className="offer-container" style={{backgroundColor: bgcolor}}>
            <div className="offer-head">
                <p className='offer-title'>{title}</p>
                <div className='offer-view'>
                    <img src={arrow} alt="arrow icon left" />
                </div>
            </div>

            <div className="offer-grid">
                {products.map((product) => (
                      <OfferCard key={product.id} product={product}/>
                ))}
            </div>
           
        </div>
    )
}