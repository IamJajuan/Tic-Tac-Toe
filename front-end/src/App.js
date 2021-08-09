import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TwoPlayer from './pages/TwoPlayer';
import Home from './pages/Home';
import SinglePlayer from './pages/SinglePlayer';

function App() {
  return (
 <div className = "App">
     <Router>
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
   </Router>
 </div>
  );
}

export default App;
