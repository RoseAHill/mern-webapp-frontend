import NavButtonLink from "./NavButtonLink";
import * as text from "../formatting/Text";
import { NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className="flex justify-between items-center p-4 w-screen col-span-full align-baseline">
      <div className="nav-left w-1/3 text-left">
          <text.Title tw={"px-1"}>
            <NavLink className={({isActive}) => 
          isActive ? "text-amber-200" : ""
        } to={"/"}>T.A.</NavLink>
          </text.Title>
      </div>
      <div className="nav-center w-1/3 text-center">
        <text.Subtitle>Hello{user ? ` ${user.username}.` : "."}</text.Subtitle>
      </div>
      <text.Label tw="nav-right w-1/3 flex flex-row justify-end">
        {user ? (
          <>
            <NavButtonLink text={"Logout"} callback={handleLogout} />
          </>
        ) : (
          <>
            <NavButtonLink text={"Login"} destination={"/auth/login"} />
            <NavButtonLink text={"Signup"} destination={"/auth/signup"} />
          </>
        )}
      </text.Label>
    </nav>
  );
};

export default NavBar;
