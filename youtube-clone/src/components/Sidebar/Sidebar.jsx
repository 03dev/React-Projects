import React from "react";
import './Sidebar.css'
import { assets } from "../../assets/assets";

function Sidebar({sidebar}) {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={assets.home} alt="" />
                    <p>Home</p>
                </div>
                <div className="side-link">
                    <img src={assets.game_icon} alt="" />
                    <p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src={assets.automobiles} alt="" />
                    <p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={assets.sports} alt="" />
                    <p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={assets.entertainment} alt="" />
                    <p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={assets.news} alt="" />
                    <p>News</p>
                </div>
                <div className="side-link">
                    <img src={assets.tech} alt="" />
                    <p>Technology</p>
                </div>
                <div className="side-link">
                    <img src={assets.music} alt="" />
                    <p>Music</p>
                </div>
                <div className="side-link">
                    <img src={assets.blogs} alt="" />
                    <p>Bogs</p>
                </div>
            </div>
            <hr />
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={assets.jack} alt="" />
                    <p>PewdiwPie</p>
                </div>
                <div className="side-link">
                    <img src={assets.simon} alt="" />
                    <p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img src={assets.tom} alt="" />
                    <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={assets.megan} alt="" />
                    <p>5-minute Crafts</p>
                </div>
                <div className="side-link">
                    <img src={assets.cameron} alt="" />
                    <p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
