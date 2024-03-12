import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogItemPropsType = {
  name: string;
  id: number;
};

type MessagePropsType = {
  message: string;
};

const DialogItem = (props: DialogItemPropsType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>;
};

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name="Dima" id={1} />
        <DialogItem name="Valera" id={2} />
        <DialogItem name="Kris" id={3} />
        <DialogItem name="Ola" id={4} />
        <DialogItem name="Semen" id={5} />
      </div>
      <div className={s.messages}>
        <Message message={"Hi"} />
        <Message message={"Hi Hi"} />
        <Message message={"How are u?"} />
      </div>
    </div>
  );
};
