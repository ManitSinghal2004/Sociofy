import React, { useContext } from "react";
import "./LeftBar.scss"
import Friends from "../../assets/friends.svg";
import Groups from "../../assets/groups.svg";
import Memories from "../../assets/moments.svg";
import Videos from "../../assets/videos.svg";
import Gallery from "../../assets/gallery.svg";
import Messages from "../../assets/messages.svg";
import Events from "../../assets/events.svg";
import Explore from "../../assets/explore.svg";
import Favourites from "../../assets/favourites.svg";
import Gaming from "../../assets/gaming.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const LeftBar = ()=>{
    const {currUser} = useContext(AuthContext) ;
    console.log(currUser)
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <Link
                    to={`/profile/${currUser.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    >
                    <div className="user">
                        <img src="https://static-00.iconduck.com/assets.00/profile-pic-illustration-256x256-5hwtzttk.png" alt="error"></img>
                        <p>{currUser.name}</p>
                    </div>
                    </Link>
                    <div className="item">
                        <img src={Friends} alt="error"></img>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="error"></img>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="error"></img>
                        <span>Memories</span>
                    </div>
                    <div className="item">
                        <img src={Explore} alt="error"></img>
                        <span>Explore</span>
                    </div>
                </div>
                <hr></hr>
                <div className="menu">
                    <span className="shortcuts">Your Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="error"></img>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="error"></img>
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="error"></img>
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="error"></img>
                        <span>Messages</span>
                    </div>
                    <div className="item">
                        <img src={Favourites} alt="error"></img>
                        <span>Favourites</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="error"></img>
                        <span>Gaming</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftBar ; 