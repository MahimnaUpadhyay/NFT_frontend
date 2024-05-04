import React from 'react'
import './style/footer.css'

import Site_Logo from '../assets/logo/ape.png';
import instagram from '../assets/logo/instagram.png';
import reddit from '../assets/logo/reddit.png';
import twitter from '../assets/logo/twitter.png';

const Footer = () => {
  return (
    <>
        <div className='footer_container'>
            <div className='footer_grid_container'>
                <div className='SiteLogo'>
                    <img src={Site_Logo} alt='Site Logo' />
                </div>
                <div className='Site_Navigation'>
                    <p>Home</p>
                    <p>Service</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='Social'>
                   <img src={instagram} alt='Instagram logo' />
                   <img src={twitter} alt='Twitter logo' />
                   <img src={reddit} alt='Reddit logo' /> 
                </div>
                <div className='Copyright'>
                    <p>@Copyright to Mahimna Upadhyay</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer