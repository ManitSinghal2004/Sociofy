import React, { useState } from "react";
import "./Post.scss";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import moment from "moment";
import { useQuery,useQueryClient,useMutation  } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
// import { style } from "@mui/system";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen , setMenuOpen] = useState(false) ; 
 
  const { currUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );  
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if(liked) return makeRequest.delete("/likes?postId= "+  post.id);
      return makeRequest.post("/likes", {postId : post.id});
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("likes");
      },
    }
  );
  const handleLike = ()=>{
    mutation.mutate(data.includes(currUser.id))
  }

  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/"+ postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const handleDelete = ()=>{
    deleteMutation.mutate(post.id)
  }
  console.log(post)
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userinfo">
            <img src={"/upload/"+post.profilePic} alt="errors" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
                <p className="date">{moment(post.createdAt).fromNow()}</p>
              </Link>
            </div>
          </div>
          <MoreHorizOutlinedIcon onClick={()=>setMenuOpen(!menuOpen)}/>
          {menuOpen && post.userId === currUser.id && <button onClick = {handleDelete} >Delete</button>}
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={"/upload/" + post.img} alt="error" />
        </div>
        <div className="info">
          <div className="item">
            {data !== undefined ? (
              <>
                {isLoading ? "loading" : data.includes(currUser.id) ? (
                  <FavoriteOutlinedIcon style={{ color: "red" }} onClick={handleLike} />
                ) : (
                  <FavoriteBorderOutlinedIcon onClick={handleLike} />
                )}
                {data.length} likes{" "}
              </>
            ) : null}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            10k comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};
export default Post;
