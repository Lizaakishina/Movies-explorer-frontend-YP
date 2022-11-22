import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    )
  }
  
  export default App;