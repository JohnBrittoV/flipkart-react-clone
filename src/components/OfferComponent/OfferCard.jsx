export const OfferCard = ({product}) => {
    const {tag, title, image} = product;

    return(
        <div className="offer-card">
            <div className="offer-img-wrapper">
                <img src={image} alt={tag} loading="lazy"/>
            </div>
            <div className="offer-details">
                <p className="offer-tag">{tag}</p>
                <p className="offer-item-title">{title}</p>
            </div>
        </div>
    )
}