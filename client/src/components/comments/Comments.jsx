import React, { useState } from "react";
import "./Comments.scss"
// import DP from "../../assets/dp.jpg"
import { useContext } from "react";
import {AuthContext} from "../../context/authContext.js"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({postId})=>{
    const [desc,setDesc] = useState("")
    const {currUser} = useContext(AuthContext) ;  

    const { isLoading, error, data } = useQuery(["comments"],() =>
            makeRequest.get("/comments?postId="+postId).then(res=>{
                return res.data;
            })
    );
      
    const queryClient = useQueryClient();

    const mutation = useMutation(
      (newComment) => {
        return makeRequest.post("/comments", newComment);
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries("comments");
        }, 
      }
    );
    const handleClick = async (e) => {
      e.preventDefault(); 
      mutation.mutate({ desc, postId });
      setDesc("");
    };

    return(
        <div className="comments">
            <div className="write">
                <img src={"/upload/"+currUser.profilePic} alt="error" />
                <input type="text" placeholder="Add a Comment..." value = {desc} onChange={e=>setDesc(e.target.value)}/>
                <button onClick={handleClick}>Post</button>
            </div>
            {isLoading ? "loading" : data.map(comment =>(
                <div className="comment">
                    <img src={"/upload/"+comment.profilePic} alt="error" />
                    <div className="info">
                        <span>
                            {comment.name}
                        </span>
                        <p>
                            {comment.desc}
                        </p>
                    </div>
                    <span className="date">{moment(comment.createdAt).fromNow()}</span>
                </div>
            ))}
        </div>
    )
}
export default Comments ; 