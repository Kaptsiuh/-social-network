import s from "./Post.module.css";

export const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png"
        alt="avatar1"
      />
      <p>post 1</p>
      <span>like</span>
    </div>
  );
};
