import React from "react";
import "./RightBar.scss"
import DP from "../../assets/dp.jpg";

const RightBar = ()=>{
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userinfo"> 
                            <img src={DP} alt="error"></img>
                            <span>Manit Singhal</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <span>Manit Singhal</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> changed their cover picture 
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> liked your post
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> commented on your post
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <p>
                            <span>Manit Singhal</span> posted 
                            </p>
                        </div>
                       <span>
                        1 min ago 
                       </span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                            <img src={DP} alt="error"></img>
                            <div className="online"></div>
                            <span>Manit Singhal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RightBar ; 