import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";
import Favourites from './components/favourites'
import LibraryPage from './pages/Downloadsnew';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<Signup1 />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/downloads" element={<LibraryPage />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/fav" element={<Favourites />} />
    </Routes>
  );
}

export default App;