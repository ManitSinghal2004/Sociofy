import React, { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../context/authContext";
const Stories = ()=>{
    const { currUser } = useContext(AuthContext) ;
    // Temporary
    const stories = [
        {
            id: 1 ,
            name: "Manit Singhal",
            img: "https://i0.wp.com/www.iedunote.com/img/28051/reference-groups.jpg",
        },
        {
            id: 2 ,
            name: "Manit Singhal",
            img: "https://i0.wp.com/www.iedunote.com/img/28051/reference-groups.jpg",
        },
        {
            id: 3 ,
            name: "Manit Singhal",
            img: "https://i0.wp.com/www.iedunote.com/img/28051/reference-groups.jpg",
        },
        {
            id: 4 ,
            name: "Manit Singhal",
            img: "https://i0.wp.com/www.iedunote.com/img/28051/reference-groups.jpg",
        },
    ]
    return(
        <div className="stories">
            <div className="story">
                <img src= {"/upload/"+currUser.profilePic} alt="error" />
                <span>{currUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src= {story.img} alt="error" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>

    )
}
export default Stories ; 