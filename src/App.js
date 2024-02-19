import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Job from "./components/Job";
import About from "./components/About";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Job} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
