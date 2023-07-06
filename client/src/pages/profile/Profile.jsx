import React, { useContext, useState } from "react";
// import DP from "../../assets/dp.jpg";
// import Cover from "../../assets/cover.jpg";
import "./Profile.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";

const Profile = () => {
  const [openUpdate,setOpenUpdate] = useState(false)
  const { currUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { data: relationshipData, isLoading: rIsLoading } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId= " + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("relationship");
      },
    }
  );
  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currUser.id));
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={"/upload/" + data.coverPic} alt="" className="cover" />
            <img src={"/upload/" + data.profilePic} alt="" className="profilePic" />
          </div>
          <div className="profileContainer">
            <div className="userI">
              <div className="left">
                <span>{data.name}</span>
                <p>NSUT Delhi</p>
                <div className="location">
                  <LocationOnIcon fontSize="small" />
                  <span>{data.city}</span>
                </div>
              </div>
              <div className="right">
                {rIsLoading ? (
                  "loading"
                ) : userId === currUser.id ? (
                  <button onClick={()=>setOpenUpdate(true)}>Update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currUser.id)
                      ? "Friends"
                      : "Add Friend"}
                  </button>
                )}
                <button>Message</button>
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )} 
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  );
};
export default Profile;
