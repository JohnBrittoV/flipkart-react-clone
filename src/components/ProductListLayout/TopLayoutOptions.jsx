import arrow from '../../assets/layoutOptions/arrow.svg';
import logo from '../../assets/layoutOptions/flipkart-logo.png';
import search from '../../assets/layoutOptions/search-icon.svg';
import cart from '../../assets/layoutOptions/cart-icon.svg';
import { useNavigate } from 'react-router-dom';
import './layout.css';

export const TopLayoutOptions = () => {

    const navigate = useNavigate();

    return(
        <div className="top-layout">
            
            <div className='layout-left'>

                <span className="top-back-button">
                    <img src={arrow} alt="arrow left"
                    onClick={() => navigate(-1)}/>
                </span>

                <span className="logo">
                    <img src={logo} alt="fipkart logo" />
                </span>

                <span className='product-type'>
                    <p>smart phones</p>
                </span>

            </div>

            <div className='layout-icons'>
                <span className='item-logo'>
                    <img src={search} alt="search icon" />
                </span>

                <span className='item-logo'>
                    <img src={cart} alt="cart icon" />
                </span>
            </div>
             
        </div>
    )
}