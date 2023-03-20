import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/logo.png";
import jwt_decode from 'jwt-decode';

type tokenType ={
    email : string , 
    phoneno : string , 
    id : string 
}
export const Header = () => {
  let [showMenu, setShowMenu] = useState(false);
  let [routePath , setRoutePath] = useState(useLocation().pathname);
  let tokenDetails : tokenType = jwt_decode(localStorage.getItem('jwt-token')!);
  let useEmail : string = tokenDetails.email;
  let toggleShowMenu = (e : any) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  


  return (
    <>
      <div className="header d-flex align-items-center justify-content-between">
        <div className="header-logo">
          {" "}
          <img src={logo}></img>
        </div>
        <div className="header-profile-menu-bar">
          <div className="header-profile d-flex align-items-center">
            <h6>{useEmail}</h6>
            <img src={logo} onClick={toggleShowMenu}></img>

            {showMenu && (
              <div className="menu-bar mt-1">
                <div className={`list-option d-flex align-items-center ${routePath == '/bookorofferride' ? "selected-item":''}`}
                 >
                  <Link to={'/bookorofferride'}>
                  Profile
                  </Link>
                </div>
                <div 
                 className={`list-option ${ routePath== '/history' ? 'selected-item':''}`}
                >
                  <Link
                    to="/history" 
                  >
                    My Rides
                  </Link>
                </div>
                <div className={`list-option ${ routePath== '/login' ? 'selected-item':''}`}
                  >
                  <Link to={'/login'}>
                  Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
