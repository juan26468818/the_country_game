import './App.css';
import{Switch, Route} from "wouter"
import Home from "./pages/Home/Home"
import Reset from './pages/Reset/Reset';
import notFound from './pages/notFound/notFound';

function App() {
  return (
       <Switch>
        <Route path="/" component={Home} />
        <Route path="/Reset/:counter" component={Reset} />
        <Route component={notFound}></Route>
      </Switch>
  );
}

export default App;
