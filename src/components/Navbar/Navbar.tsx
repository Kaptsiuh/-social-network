import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink className={s.item} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={s.item} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className={s.item} to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={s.item} to="/music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className={s.item} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
