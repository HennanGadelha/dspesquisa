import { ReactComponent } from '*.svg';
import React from 'react';
import './styles.css';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { Link } from 'react-router-dom'


const Header = () =>{

    return <header className="main-header">

    <Link to="/">
        <div className="logo-text">

            <span className="logo-text-1">Big Game</span>
            <span className="logo-text-2"> Survey</span>

        </div>
    
    </Link>

    <Logo />

    </header>
}

export default Header;