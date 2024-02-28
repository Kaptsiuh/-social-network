import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#1">Home</a>
      <a href="#2">News Feed</a>
      <a href="#3">Messages</a>
    </div>
  );
};

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>js</li>
        <li>html</li>
        <li>react</li>
      </ul>
    </div>
  );
};

export default App;
