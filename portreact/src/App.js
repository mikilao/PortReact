import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import "tailwindcss/tailwind.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Post from "./Components/Post";
import Project from './Components/Project';
import Singlepost from './Components/Singlepost';
import NavBar from "./Components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path="/" exact></Route>
      <Route component={About} path="/about"></Route>
      <Route component={Post} path="/post"></Route>
      <Route component={Project} path="/project"></Route>
      <Route component={Singlepost} path="/post/:slug"></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
