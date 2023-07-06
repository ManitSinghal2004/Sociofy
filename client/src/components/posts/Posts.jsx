import React from "react";
// import Post1 from "../../assets/reso'22_day1.png";
// import Post2 from "../../assets/reso'22_day2.png";
// import Post3 from "../../assets/reso'22_day3.png";
// import DP from "../../assets/dp.jpg";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import "./Posts.scss";
import { useNavigate } from "react-router-dom";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery(["posts"],() =>
        makeRequest.get("/posts?userId="+userId).then(res=>{
            return res.data;
        })
  );
  const navigate = useNavigate();
  if(error){
    navigate("/login");
  }
  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
