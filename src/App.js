import "./App.css";
import Home from "./Home/Home";
import Challenges from "./Challenges/Challenges";
import Account from "./Account/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

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
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
