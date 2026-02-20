import {ProductCard} from './ProductCard';
import arrow from '../../assets/Suggested/icons/arrow-left.svg';
import item1desk from '../../assets/Suggested/images/realmec63-desk.webp';
import item1tab from '../../assets/Suggested/images/realmec63-tab.webp';
import item1mob from '../../assets/Suggested/images/realmec63-mob.webp';
import item3desk from '../../assets/Suggested/images/vivo60-desk.webp'
import item3tab from '../../assets/Suggested/images/vivo60-tab.webp';
import item3mob from '../../assets/Suggested/images/vivo60-mob.webp';
import item5desk from '../../assets/Suggested/images/oppo27-desk.webp';
import item5tab from '../../assets/Suggested/images/oppo27-tab.webp';
import item5mob from '../../assets/Suggested/images/oppo27-mob.webp';
import item6desk from '../../assets/Suggested/images/realme-naz-desk.webp';
import item6tab from '../../assets/Suggested/images/realme-naz-tab.webp';
import item6mob from '../../assets/Suggested/images/realme-naz-mob.webp';
import './Suggestions.css';

const products = [
    {
        id: 1,
        title: "realme C63 5G (Starry Gold, 128GB)",
        price: 10999,
        offer: 13999,
        rating: 4.5,
        image: {
            mobile: item1mob,
            tablet: item1tab,
            desktop: item1desk
        },
    },
    {
        id:2,
        title: "realme 1200 White",
        price: 35000,
        offer: 40000,
        rating: null,
        image: {
            mobile: item1mob,
            tablet: item1tab,
            desktop: item1desk
        }
    },
    {
        id:3,
        title: "OPPO F27 Pro+ (Midnight Navy, 128 GB)",
        price: 32999,
        offer: null,
        rating: 4.4,
        image: {
            mobile: item5mob,
            tablet: item5tab,
            desktop: item5desk
        }
    },
    
    {
        id:4,
        title: "Samsung Metro 313 White",
        price: 11990,
        offer: 13000,
        rating: null,
        image: {
            mobile: item6mob,
            tablet: item6tab,
            desktop:item6desk
        }
    },
    {
        id:5,
        title: "vivo V60 (Elite Purple, 256 GB)",
        price: 33999,
        offer: 36999,
        rating: 4.4,
        image: {
                mobile: item3mob,
                tablet: item3tab,
                desktop: item3desk
        }
    },
    
    {
        id:6,
        title: "realme Narzo 80 Lite 5G (Onyx Black, 128Gb)",
        price: 12552,
        offer: 14999,
        rating: 4.3,
        image:{
            mobile: item6mob,
            tablet: item6tab,
            desktop: item6desk
        }
    }
]

export const SuggestedProducts = () => {
    return(
        <div className="suggested-container">
            
            <div className="suggested-head">
                <div className="suggested-title">
                    <p>Suggested For You</p>
                </div>
                <div className="suggested-view">
                    <img src={arrow} alt="arrow left" />
                </div>
            </div>

            <div className="sugg-product-grid">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            
        </div>
    )
}