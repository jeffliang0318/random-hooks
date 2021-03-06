import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Head from "./head";
import RandomUser from "./random-user";
import Home from "./Home";
import Star from "./star";
import Reference from "./reference";
import StyleGuide from "./styleguide";

function App() {
  return (
    <Router>
      <Head></Head>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          <RandomUser />
        </Route>
        <Route path="/random-user">
          <RandomUser />
        </Route>
        <Route path="/star">
          <Star />
        </Route>
        <Route path="/ref">
          <Reference />
        </Route>
        <Route path="/styleguide">
          <StyleGuide />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
