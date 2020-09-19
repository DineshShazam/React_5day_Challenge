import React from 'react'
import './Header.style.css'
import logo from './logo_sdk.png'
import {Link} from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';
import { useStateValue } from '../../State/StateProvider';


function Header() {

    const [state,dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className="header_logo">
                <Link to='/'>
                <img src={logo} alt='SDK_LOGO' />
                </Link>
            </div>

            <div className="header_search">
                <input type='text' className='header_input' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">

                <div className="header_options">
                    <span className='nav_1'>Hello </span>

                    <span className='nav_2'>Guest </span>
                </div>

                <div className="header_options">
                    <span className='nav_1'>Returns </span>

                    <span className='nav_2'>&orders </span>
                </div>

                {/* <div className="header_options">
                    <span className='nav_1'>Your </span>

                    <span className='nav_2'>Prime </span>
                </div> */}
                
                <div className="header_cart">
                    <Link to='/cart'>
                    <ShopIcon />
                    <span className='nav_2 cart_count'>{state.Courses?.length}</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header
