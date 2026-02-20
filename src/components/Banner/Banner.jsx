import nothingMob from '../../assets/banner/nothing-mob.webp';
import nothingTab from '../../assets/banner/nothing-tablet.webp';
import nothingDesk from '../../assets/banner/nothing-desktop.webp';
import './Banner.css'

export const Banner = () => {
    return(
      <div className="banner-container">
        <picture>

            <source media='(min-width:1024)' srcSet={nothingDesk}/>

            <source media='(min-width:768px)' srcSet={nothingTab}/>

            <img src={nothingMob} alt="Nothing Promo Banner" className='banner-image' />

        </picture>
      </div>  
    )
}