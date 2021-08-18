import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index'
import SignIn from './pages/SignIn'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-in' exact component={SignIn} />
        {/* <Route path='/' exact component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
