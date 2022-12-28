
import React from 'react'
import '../styles/Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='section-footer'>
                <img className='logo'src="./images/logo.png" alt="logo"/>
                <p>Comics</p>
            </div>
            <p>©2022 Comic App.</p>
            <div className='pages'>
                <h3>Pages</h3>
                <a href=" ">Comics</a>
            </div>
        </div>
    )
}

export default Footer

