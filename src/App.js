import './App.css';
import{Switch, Route} from "wouter"
import Home from "./pages/Home/Home"
import {Reset} from './pages/Reset/Reset';

function App() {
  return (
       <Switch>
        <Route path="/" component={Home} />
        <Route path="/Reset" component={Reset} />
        {/* <Route component={NotFound}></Route> */}
      </Switch>
  );
}

export default App;
