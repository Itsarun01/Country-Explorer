import {NavLink} from "react-router-dom";
import "../../App.css";
import {useState} from "react";

import {TiThMenu} from "react-icons/ti";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    return () => {
      setMenu(!menu);
      if (menu) {
        document.body.style.overflow = "active";
      } else {
        document.body.style.overflow = "hidden";
      }
    };
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="Logo">
              <NavLink to="/">
                <h1>WorldAtlas</h1>
              </NavLink>
            </div>

            <nav>
              <ul className={menu ? "active" : "hidden"}>
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
            <div className="ham-menu" onClick={handleMenuClick()}>
              <TiThMenu className="menu-icon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
