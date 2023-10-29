import { Switch, Route } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/counter' component={CounterPage}/>
      <Route path='/users' component={UserPage}/>
      <Route path='*' component={NotFoundPage}/>
    </Switch>
  );
}

export default App;
