import s from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + " " + s.active}>Dmitry</div>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog}>Kris</div>
        <div className={s.dialog}>Ola</div>
        <div className={s.dialog}>Semen</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi Hi</div>
        <div className={s.message}>How are u?</div>
      </div>
    </div>
  );
};
