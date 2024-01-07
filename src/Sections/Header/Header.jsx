import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import cart from '../../assets/cart.jpg'
import './Header.css'

const Header = () => {

    // navigate to main page
    const navigate = useNavigate();
    const navigationHome = () => {
        navigate('/mainPage');
    }

    // navigate to cart
    const navigateCart = () => {
        navigate('/cart');
    }

    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img className='logoImage' src={logo} onClick={navigationHome} />
            </div>
            <div className='rightContainer'>
                <div className='contentDiv'>
                    <div className='whyUsDiv'>Why Us?</div>
                    <div className='serviceDiv'>Services</div>
                    <div className='contactDiv'>Contact Us</div>
                </div>
                <div className='cartDiv'><img className='cartImage' src={cart} onClick={navigateCart}/></div>
            </div>
        </div>
    )
}

export default Header