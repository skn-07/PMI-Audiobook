import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<Signup1 />} />
      <Route path="/signup2" element={<Signup2 />} />
    </Routes>
  );
}

export default App;