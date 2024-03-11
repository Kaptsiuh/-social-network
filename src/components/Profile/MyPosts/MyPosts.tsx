import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <Post message="Hi, how are u?" like={15} />
        <Post message="It's my first post" like={20} />
      </div>
    </div>
  );
};
