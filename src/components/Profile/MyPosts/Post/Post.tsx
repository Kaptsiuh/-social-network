import s from "./Post.module.css";

type PostPropsType = {
  message?: string;
  like?: number;
};

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png"
        alt="avatar1"
      />
      <p>{props.message}</p>
      <span>{props.like}</span>
    </div>
  );
};
