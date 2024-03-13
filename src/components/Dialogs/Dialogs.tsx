import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogItemPropsType = {
  name: string;
  id: number;
};

type MessagePropsType = {
  message: string;
};

type DialogsDataPRopsType = {
  id: number;
  name: string;
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
  let dialogsData = [
    {
      id: 1,
      name: "Dima",
    },
    {
      id: 2,
      name: "Andrew",
    },
    {
      id: 3,
      name: "Sveta",
    },
    {
      id: 4,
      name: "Sasha",
    },
    {
      id: 5,
      name: "Ola",
    },
    {
      id: 6,
      name: "Viktor",
    },
  ];

  let messagesData = [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "Hi Hi",
    },
    {
      id: 3,
      message: "How are u?",
    },
    {
      id: 4,
      message: "Hi",
    },
    {
      id: 5,
      message: "How are u?",
    },
    {
      id: 6,
      message: "Hi Hi",
    },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};
