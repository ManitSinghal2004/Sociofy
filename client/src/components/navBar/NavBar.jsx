import React, { useContext } from "react";
import "./NavBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const {toggle,darkMode} = useContext(DarkModeContext) ;
  const {currUser} = useContext(AuthContext) ;
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Sociofy</span>
        </Link>
        <HomeOutlinedIcon/>
        {!darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : <LightModeOutlinedIcon onClick={toggle}/>}
        <AppsOutlinedIcon/>
        <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Search..."></input>
        </div>
      </div>
      <div className="right">
        <LogoutIcon onClick={()=>{
          fetch("http://localhost:8800/api/auth/logout", {method:"POST"}).then(()=>{
              navigate("/login");
          })
        }}/>
        <PersonOutlineOutlinedIcon/>
        <MailOutlineOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
            <AccountCircleOutlinedIcon/>
            <span>{currUser.name}</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
