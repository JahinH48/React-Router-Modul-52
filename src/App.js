
import './App.css';
import About from './component/About/About';
import Dos from './component/Dos/Dos';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import NotFound from './component/Not-Found/NotFound';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Header from './component/Header/Header';
import FriendDetails from './component/FriendDetail/FriendDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

        <Route exact path="/">
        <Home></Home>
        </Route>


        <Route  path="/friend/:friendId">
        <FriendDetails></FriendDetails>
        </Route>

          <Route path="/friends">
            <Friends></Friends>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>

          <Route path="/home">
        <Home></Home>
        </Route>


        <Route path="/dos">
        <Dos></Dos>
        </Route>

        <Route path="*">
        <NotFound></NotFound>
        </Route>


        </Switch>
      </Router>
      
    {/*   <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/dos">
        <Dos></Dos>
        </Route>
        <Route path="/friends">
        <Friends></Friends>
        </Route>
        <Route path="/about">
        <About></About>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
