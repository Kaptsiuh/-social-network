import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/100px-Google_%22G%22_logo.svg.png"
        alt="logo"
      />
    </header>
  );
};
