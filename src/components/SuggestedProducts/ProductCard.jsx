export const ProductCard = ({product}) => {
    const {title, price, rating, image, offer} = product;
    
   return(
    <div className="sugg-product-card">
        <div className="sugg-img-wrapper">
            <img src={image.tablet} alt={title} loading="lazy"/>

            {rating && (           
                <div className="sugg-rating-badge">
                    <span style={{color: "black", fontWeight: "500"}}>{rating}</span>
                    <span style={{color: "green"}}>★</span>
                </div>
            )}
        </div>

        <h4 className="sugg-product-title">{title}</h4>
        <div style={{display: "flex"}}>
            <p className="sugg-product-price">₹{price.toLocaleString()}</p>

            { offer && (
                <p style={{marginLeft:"5px"}} className="sugg-product-offer">₹{offer}</p>
            )}
           
        </div>
    </div>
    
   ) 
}