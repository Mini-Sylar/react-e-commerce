import Links from "./Links/Links";
import Logo from "./Logo/Logo";

const NavBar = () => {
  return (
    <div>
      <div className="logo">
        <Logo></Logo>
      </div>
      <div className="links">
        <Links></Links>
      </div>
    </div>
  );
};
export default NavBar;
