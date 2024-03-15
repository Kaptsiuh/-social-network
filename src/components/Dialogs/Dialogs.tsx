import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";

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
        {dialogsData.map((dialog) => {
          return (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
          );
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map((message) => {
          return <Message key={message.id} message={message.message} />;
        })}
      </div>
    </div>
  );
};
