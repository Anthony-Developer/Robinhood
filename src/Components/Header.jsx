import React from 'react'
import Logo from '../Images/robinhood.svg'

function Header() {
    return (
        <div className="header_wrapper">

            <div className="header_logo"> 
                <img src={Logo} width={25} alt="robinghoodApp" /> 
            </div>

            <div className="header_ search">
                <div className="header_searchContainer">

                </div>
            </div>
            
        </div>
    )
}

export default Header
