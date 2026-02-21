import { Header } from '../components/HeaderComponent/Header';
import { Carousel } from '../components/Carousel/Carousel';
import { Banner } from '../components/Banner/Banner';
import { SponsoredProducts } from '../components/SponsoredProducts/SponsoredProducts';
import { ProductGrid } from '../components/SuggestedProducts/ProductGrid';
import { products } from '../data/suggestedProducts';
import { reCommendedProducts } from '../data/recommandedProducts';


export const Home = () => {
    return(
        <div>
            <Header/>
            <Carousel/>
            <Banner/>
            <ProductGrid 
                title= "Suggested For You" 
                products={products}/>
            <SponsoredProducts/>
            <ProductGrid
                title="Recommeded For You"
                products={reCommendedProducts}/>
        </div>
    )
}