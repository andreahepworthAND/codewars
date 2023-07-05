import "./App.css";
import Home from "./Home/Home";
import Challenges from "./Challenges/Challenges";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/challenges">Challenges</a>
        </li>
        <li>
          <a href="/account">Account</a>
        </li>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
