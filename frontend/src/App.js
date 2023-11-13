import './App.css';
import Profile from "./components/Profile";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <Profile
          username="volkovik"
          fullname="Daniil Siurmachenko"
          avatarUrl="https://cdn.discordapp.com/avatars/279632382582325248/a5c6840c61a25052d6ffe80b2d345b61.webp"
          bio="Full-stack developer. Use Django and React.js for creating web applications. Feel free to contact me!"
      >
          <Link
              iconUrl='https://cdn-icons-png.flaticon.com/512/733/733579.png'
              name='Twitter'
              link='https://twitter.com/volkovik_'
          />
      </Profile>
    </div>
  );
}

export default App;
