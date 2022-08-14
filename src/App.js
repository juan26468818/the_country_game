import './App.css';
import{Switch, Route} from "wouter"
import Home from "./pages/Home/Home"

function App() {
  return (
       <Switch>
        <Route path="/" component={Home} />
        {/* <Route component={NotFound}></Route> */}
      </Switch>
  );
}

export default App;
