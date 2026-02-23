import assuredIcon from '../../assets/layoutOptions/assured.webp';
import downArrow from '../../assets/layoutOptions/down.svg';
import favIcon from '../../assets/layoutOptions/fav-icon.svg';
import wowText from '../../assets/layoutOptions/wow-text.webp';
import './product.css';

export const ProductCard = ({product}) => {
    const {
        title,
        rating,
        ratingCount,
        assured,
        discount,
        originalPrice,
        price,
        bankPrice,
        exchangeOffer, 
        warranty,
        image,
        bestSeller,
        relevanceScore,
        popularityScore,
    } = product;

    return(
        <div className="mproduct-card">
            
            <div className="mproduct-item">
                <img src={image} alt={title} className='mproduct-image' />
            </div>
            
            <div className="mproduct-details">
                <h3 className='mproduct-title'>{title}</h3>
                
                <div className="mrating-row">
                    <span className='mrating-stars'>
                        <span className='stars-icon'>★</span>
                        <span className='stars-icon'>★</span>
                        <span className='stars-icon'>★</span>
                        <span className='stars-icon'>★</span>
                        <span className='stars-icon'>★</span>
                    </span>

                    <span className='mrating-count'>({ratingCount.toLocaleString()})</span>
                    {assured && <span className='massured'>
                        <img src={assuredIcon} alt="flipkart assured" />
                    </span>}
                </div>

                <div className="price-row">
                    <div className='price-percentage'>
                        <img src={downArrow} alt="decrease icon" className=''/>
                        <span className='discount'>{discount}%</span>
                    </div>
                    
                    <div style={{display: "flex", gap: "8px"}}>
                        <span className='original-price'>₹{originalPrice.toLocaleString()}</span>
                        <span className='final-price'>₹{price.toLocaleString()}</span>
                    </div>
                    
                </div>

                <div className="bank-offer">
                    <img src={wowText} alt="wow text" className='wow-img' />
                    <p className='bank-price'>₹{bankPrice.toLocaleString()}</p>
                    <p className='bank-offer-text'>with Bank offer</p>
                </div>

                <p className='exchange'>{exchangeOffer}</p>
                <p className='warranty'>{warranty}</p>
            </div>

            <div className="wishlist">
                <img src={favIcon} alt="favorite icon" />
            </div>
            
        </div>
    )
}