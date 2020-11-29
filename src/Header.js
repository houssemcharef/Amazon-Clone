import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

export default function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt=""
                />
            </Link>
            
            <div className="header__search"> 
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div> 
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello {user?user?.email:'Gest'}</span>
                        <span className="header__optionLineTow">{user?'SignOut':'SignIn'}</span>
                    </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTow">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTow">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTow header__bascketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
