import { DialogItem } from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";

export type DialogsDataPropsType = {
  id: number;
  name: string;
};

export type MessagesDataPropsType = {
  id: number;
  message: string;
};

export const Dialogs = (props: {
  dialogsData: DialogsDataPropsType[];
  messagesData: MessagesDataPropsType[];
}) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {props.dialogsData.map((dialog) => {
          return (
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
          );
        })}
      </div>
      <div className={s.messages}>
        {props.messagesData.map((message) => {
          return <Message key={message.id} message={message.message} />;
        })}
      </div>
    </div>
  );
};
