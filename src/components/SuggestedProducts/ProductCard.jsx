export const ProductCard = ({product}) => {
    const {title, price, rating, image, offer} = product;
    
   return(
    <div className="sugg-product-card">
        <div className="sugg-img-wrapper">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={image.desktop}/>
                <source
                    media="(min-width: 768px)"
                    srcSet={image.tablet}/>

                <img src={image.mobile} alt={title} loading="lazy"/>
            </picture>

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