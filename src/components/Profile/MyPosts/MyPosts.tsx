import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      message: "Hi, how are u?",
      likesCount: 15,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 12,
    },
  ];

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
        {postsData.map((post) => (
          <Post key={post.id} message={post.message} like={post.likesCount} />
        ))}
      </div>
    </div>
  );
};
