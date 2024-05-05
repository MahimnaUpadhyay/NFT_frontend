import React from 'react';
import './style/Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className='Navbar_Container'>
            <nav className='Navbar'>
                <div className='logo'>
                    <p>NFT PLT</p>
                </div>
                <div className='links'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/market"}>Market</Link>
                    <Link to={"/about"}>About</Link>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar