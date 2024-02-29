import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/100px-Google_%22G%22_logo.svg.png"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#1">Profile</a>
          </li>
          <li>
            <a href="#1">Messages</a>
          </li>
          <li>
            <a href="#1">News</a>
          </li>
          <li>
            <a href="#1">Music</a>
          </li>
          <li>
            <a href="#1">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <img
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709164800&semt=sph"
          alt="nature"
        />
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
