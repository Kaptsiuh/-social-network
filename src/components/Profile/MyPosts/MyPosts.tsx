import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are u?" like={15} />
        <Post message="It's my first post" like={20} />
      </div>
    </div>
  );
};
