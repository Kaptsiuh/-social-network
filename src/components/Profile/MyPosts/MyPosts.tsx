import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export type MyPostsPropsType = {
  id: number;
  message: string;
  likesCount: number;
};

export const MyPosts = (props: { postsData: MyPostsPropsType[] }) => {
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
        {props.postsData.map((post) => (
          <Post key={post.id} message={post.message} like={post.likesCount} />
        ))}
      </div>
    </div>
  );
};
