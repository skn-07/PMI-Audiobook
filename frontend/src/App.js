import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes className="App w-screen">
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;