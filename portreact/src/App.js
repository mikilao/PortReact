import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import "tailwindcss/tailwind.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Post from "./Components/Post";
import Project from './Components/Project';
import Singlepost from './Components/Singlepost';
import NavBar from "./Components/Navbar";
import FooterPage from "./Components/Footer";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribePage from "./Components/Subscribe";



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path="/" exact></Route>
      <Route component={About} path="/about"></Route>
      <Route component={Singlepost} path="/post/:slug"></Route>
      <Route component={Post} path="/post"></Route>
      <Route component={Project} path="/project"></Route>
      
    </Switch>
    
    <FooterPage />
    
<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
    </BrowserRouter>
  );
}

export default App;
