export const SponsorCard = ({product}) => {
    const {image, title} = product;

    return(
        <div className="sp-product-card">
            <div className="sp-image-wrapper">
                <picture>
                    <source 
                        media="(min-width: 1024px)"
                        srcSet={image.desktop}/>
                    <source
                        media="(min-width:768px)"
                        srcSet={image.tablet}/>
                    <img src={image.mobile} alt={title} loading="lazy"/>
                </picture>
            </div>
        </div>
    )
}