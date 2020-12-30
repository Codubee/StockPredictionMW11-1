import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import StockDetails from './components/StockDetails/StockDetails'
import NavBar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/information/:companyName" component={StockDetails}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
