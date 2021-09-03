import './App.css';
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import TwoPlayer from './pages/TwoPlayer';
import Home from './pages/Home';
import SinglePlayer from './pages/SinglePlayer';

function App() {
  return (
 <div className = "App">
     <HashRouter basename = {process.env.PUBLIC_URL}>
      <Switch>
    <Route  exact path="/TwoPlayer">
      <TwoPlayer />
    </Route>
    <Route exact path = "/SinglePlayer">
      <SinglePlayer />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
   </HashRouter>
 </div>
  );
}

export default App;
