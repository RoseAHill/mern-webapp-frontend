import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavButtonLink = ({ text, destination = null, callback = null }) => {
  return (
    <div className="navButton px-1 mx-3 underline underline-offset-1 font-bold hover:no-underline hover:cursor-pointer">
      {destination ? (
        <NavLink className={({isActive}) => 
          isActive ? "text-amber-200" : ""
        } to={destination}>{text}</NavLink>
      ) : (
        <Link to="" onClick={callback}>{text}</Link>
      )}
    </div>
  );
};

export default NavButtonLink;
