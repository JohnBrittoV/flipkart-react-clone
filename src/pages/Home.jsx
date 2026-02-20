import { Header } from '../components/HeaderComponent/Header';
import { Carousel } from '../components/Carousel/Carousel';
import { Banner } from '../components/Banner/Banner';
import { SuggestedProducts } from '../components/SuggestedProducts/SuggestedProducts'

export const Home = () => {
    return(
        <div>
            <Header/>
            <Carousel/>
            <Banner/>
            <SuggestedProducts/>
        </div>
    )
}