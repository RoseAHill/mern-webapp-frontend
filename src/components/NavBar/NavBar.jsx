import NavButtonLink from "./NavButtonLink";
import { NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className="flex justify-between items-center p-4 w-screen col-span-full align-baseline">
      <div className="nav-left w-1/3 text-left">
          <div className="text-3xl font-bold px-1">
            <NavLink className={({isActive}) => 
          isActive ? "text-amber-200" : ""
        } to={"/"}>T.A.</NavLink>
          </div>
      </div>
      <div className="nav-center w-1/3 text-center">
        <div className="text-lg font-medium italic">Hello{user ? ` ${user.username}.` : "."}</div>
      </div>
      <div className="font-mono nav-right w-1/3 flex flex-row justify-end">
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
      </div>
    </nav>
  );
};

export default NavBar;
