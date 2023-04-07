import Account from "./Account/Account";
import Links from "./Links/Links";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="sub-container">
      <div className="nav-container">
        <Logo></Logo>
        <Links></Links>
        <Search></Search>
        <Account></Account>
      </div>
    </div>
  );
};
export default NavBar;
