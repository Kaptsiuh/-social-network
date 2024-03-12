import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to={"/dialogs/1"}>Dmitry</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/2"}>Valera</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/3"}>Kris</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/4"}>Ola</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to={"/dialogs/5"}>Semen</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi Hi</div>
        <div className={s.message}>How are u?</div>
      </div>
    </div>
  );
};
