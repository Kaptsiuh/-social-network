import { MyPosts, MyPostsPropsType } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: { postsData: MyPostsPropsType[] }) => {
  return (
    <main>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </main>
  );
};
