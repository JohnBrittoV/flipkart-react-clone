import forYouIcon from '../../assets/header/svg/all.svg';
import fashionIcon from '../../assets/header/svg/fashion.svg';
import mobileIcon from '../../assets/header/svg/mobiles.svg';
import beautyIcon from '../../assets/header/svg/beauty.svg';
import electronicIcon from '../../assets/header/svg/electronics.svg';
import homeIcon from '../../assets/header/svg/home.svg';
import tvIcon from '../../assets/header/svg/tv.svg';
import toyIcon from '../../assets/header/svg/toy.svg';
import foodIcon from '../../assets/header/svg/food.svg';
import autoIcon from '../../assets/header/svg/auto.svg';
import twoweelIcon from '../../assets/header/svg/scooter.svg';
import sportsIcon from '../../assets/header/svg/sport.svg';
import booksIcon from '../../assets/header/svg/books.svg';
import furnitureIcon from '../../assets/header/svg/furniture.svg';

import { useState } from 'react';

export const CategoryNav = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
        {id:0,  label: "For You", icon: forYouIcon},
        {id:1,  label: "Fashion", icon: fashionIcon},
        {id:2,  label: "Mobiles", icon: mobileIcon},
        {id:3,  label: "Beauty", icon: beautyIcon},
        {id:4,  label: "Electronics", icon: electronicIcon},
        {id:5,  label: "Home", icon: homeIcon},
        {id:6,  label: "Appliances", icon: tvIcon},
        {id:7,  label: "Toys", icon: toyIcon},
        {id:8,  label: "Food", icon: foodIcon},
        {id:9, label: "Automobile", icon: autoIcon},
        {id:10, label: "2 Wheelers", icon: twoweelIcon},
        {id:11, label: "Sports", icon: sportsIcon},
        {id:12, label: "Books ", icon: booksIcon},
        {id:13, label: "Furniture", icon: furnitureIcon}
    ];
    
    return(
        <div className="category-container">
            <div className='category-block'>
                    
                {categories.map((item, index) => (
                    
                    <div key={item.id} 
                        className={`category-item ${activeIndex === index ? "active" : ""}`} 
                        onClick={() => setActiveIndex(index)}>
                        
                        <div className="category-icon">
                            <img src={item.icon} alt={item.label} />
                        </div>

                        <div className="category-label">
                            {item.label}
                        </div>
                    </div>

                ))}
                
            </div>         
        </div>
    )
}