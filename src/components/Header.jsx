import logo from "../../public/logo.png";

export const Header = () => {
  return (
    <div className="conatiner">
      <div className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="nav-bar">
          <ul className="header-list">
            <li> About </li>
            <li> Skills </li>
            <li> Project</li>
            <li className="contact"> Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
