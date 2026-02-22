import { Header } from '../components/HeaderComponent/Header';
import { Carousel } from '../components/Carousel/Carousel';
import { Banner } from '../components/Banner/Banner';
import { SponsoredProducts } from '../components/SponsoredProducts/SponsoredProducts';
import { ProductGrid } from '../components/SuggestedProducts/ProductGrid';
import { products } from '../data/suggestedProducts';
import { reCommendedProducts } from '../data/recommandedProducts';
import { Offers } from '../components/OfferComponent/Offers';
import { offerProducts, offerItems } from '../data/offerProducts';


export const Home = () => {
    return(
        <div>
            <Header/>
            <Carousel/>
            <Banner/>
            <ProductGrid title= "Suggested For You" products={products} setview="smartphones"/>
            <SponsoredProducts/>
            <ProductGrid title="Recommeded For You" products={reCommendedProducts} setveiw="earbuds"/>
            
            <Offers title="Shop for Smart Watches" products={offerProducts} bgcolor="d5e7f5"/>
            <Offers title="Widest Collection" products={offerItems} bgcolor="#d8f2e8"/>
        </div>
    )
}