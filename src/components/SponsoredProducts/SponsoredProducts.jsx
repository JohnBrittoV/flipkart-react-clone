import oneMob from '../../assets/Sponsored/id-one.webp';
import oneTab from '../../assets/Sponsored/id-one-tab.webp';
import oneDesk from '../../assets/Sponsored/id-one-desk.webp';

import twoMob from '../../assets/Sponsored/id-two.webp';
import twoTab from '../../assets/Sponsored/id-two-tab.webp';
import twoDesk from '../../assets/Sponsored/id-two-desk.webp';

import threeMob from '../../assets/Sponsored/id-three.webp';
import threeTab from '../../assets/Sponsored/id-three.webp';
import threeDesk from '../../assets/Sponsored/id-three-desk.webp';

import fourMob from '../../assets/Sponsored/id-four.webp';
import fourTab from '../../assets/Sponsored/id-four-tab.webp';
import fourDesk from '../../assets/Sponsored/id-four-desk.webp';

import fiveMob from '../../assets/Sponsored/id-five.webp';
import fiveTab from '../../assets/Sponsored/id-five-tab.webp';
import fiveDesk from '../../assets/Sponsored/id-five-desk.webp'

import sixMob from '../../assets/Sponsored/id-six.webp';
import sixTab from '../../assets/Sponsored/id-six-tab.webp';
import sixDesk from '../../assets/Sponsored/id-six-desk.webp';

import { SponsorCard } from './SponsorCard';
import './Sponsored.css'

const spItems = [
    {
        id: 1,
        title: "Launch 23nd Feb",
        tag: "Win free buds",
        image: {
            mobile: oneMob,
            tablet: oneTab,
            desktop: oneDesk 
        }
    },
    {
        id: 2,
        title: "Spl. Price ₹1,799",
        tag: "Limited time deal",
        image: {
            mobile: twoMob,
            tablet: twoTab,
            desktop: twoDesk
        }
    },
    {
        id: 3,
        title: "From ₹999",
        tag: "Track your fitness",
        image: {
            mobile: threeMob,
            tablet: threeTab,
            desktop: threeDesk
        }
    },
    {
        id: 4,
        title: "Min 50% off",
        tag: "Dazzling watches",
        image: {
            mobile: fourMob,
            tablet: fourTab,
            desktop: fourDesk
        }
    },
    {
        id:5,
        title: "From ₹151",
        tag: "Makeup essentials",
        image: {
            mobile: fiveMob,
            tablet: fiveTab,
            desktop: fiveDesk
        }
    },
    {
        id:6,
        title: "Up to 80% Off",
        tag: "Be festive-ready",
        image: {
            mobile: sixMob,
            tablet: sixTab,
            desktop: sixDesk
        }
    }
]

export const SponsoredProducts = () => {
    return(
        <div className="sponsored-container">
            
            <div className="sponsored-head">
                <div className="suggested-title">
                    <p>Sponsored</p>
                </div>
            </div>

            <div className="sp-product-grid">
                {spItems.map((product) => (
                    <SponsorCard
                        key={product.id}
                        product={product}/>
                ))}
            </div>
            
        </div>
    )
}