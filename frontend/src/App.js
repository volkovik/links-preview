import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./components/CardProfile";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className='App'>
      <nav className='Navigation'>
        <h1 className='Navigation__logo'><Link to='/'>Showcase</Link></h1>
        <ul className='Navigation__items'>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <div className="Content">
        <Routes className='Content'>
          <Route index element={<Home />} />
          <Route path=':username' element={<Profile />} />
          <Route path='profile' element={<EditProfile />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
