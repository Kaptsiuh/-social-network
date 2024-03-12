import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <>
      <img
        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=sph"
        alt="nature"
      />
      <div className={s.descriptionBlock}>ava + description</div>
    </>
  );
};
