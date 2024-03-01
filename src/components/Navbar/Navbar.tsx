import s from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a className={`${s.item} ${s.active}`} href="#1">
            Profile
          </a>
        </li>
        <li>
          <a className={s.item} href="#1">
            Messages
          </a>
        </li>
        <li>
          <a className={s.item} href="#1">
            News
          </a>
        </li>
        <li>
          <a className={s.item} href="#1">
            Music
          </a>
        </li>
        <li>
          <a className={s.item} href="#1">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
