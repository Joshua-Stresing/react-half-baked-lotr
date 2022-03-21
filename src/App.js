import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Characters from './views/Characters/Characters';
import Films from './views/Books/Books';
import Books from './views/Films/Films';
import Home from './views/Main/Home';

function App() {
 
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/characters">
            <Characters />
          </Route>
          <Route exact path = "/films">
            <Films />
          </Route>
          <Route exact path = "books">
            <Books />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
