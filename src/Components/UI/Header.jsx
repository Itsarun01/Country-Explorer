import {NavLink} from "react-router-dom";
import "../../App.css";
import {TiThMenu} from "react-icons/ti";
import {useState} from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="Logo">
              <NavLink to="/">
                <h1>Country Explorer</h1>
              </NavLink>
            </div>
            <nav className={toggle ? "mob-nav" : "web-nav"}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/topcountries">Top Countries</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div className="ham-menu" onClick={handleToggle}>
              <TiThMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
