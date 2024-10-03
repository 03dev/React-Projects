import React from "react";
import './Navbar.css'
import { assets } from '../../assets/assets'

function Nvabar({setSidebar}) {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img src={assets.menu} alt="" className="menu-icon" onClick={()=> setSidebar(prev=>prev===false ? true : false)}/>
                <img src={assets.logo} alt="" className="logo" />
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" name="" id="" placeholder="Search" />
                    <img src={assets.search} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={assets.upload} alt="" />
                <img src={assets.more} alt="" />
                <img src={assets.notification} alt="" />
                <img src={assets.user_profile} alt="" className="user-icon" />
            </div>
        </nav>
    )
}

export default Nvabar