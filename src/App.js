import { Switch, Route, BrowserRouter } from 'react-router-dom;'
import './App.css';

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
