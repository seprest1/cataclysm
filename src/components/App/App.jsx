import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//components
import TitlePage from '../Title/Title';
import MenuPage from '../Menu/Menu';
import StoryPage from '../Story/Story';
import DeathPage from '../Death/Death';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []);

  const users = useSelector(store => store.user);
  console.log(users);

  return (
    <div className="app">
      <Switch >
        <Route exact path="/">
          <TitlePage/>
        </Route>

        <Route exact path="/menu">
          <MenuPage/>
        </Route>

        <Route exact path="/story">
          <StoryPage/>
        </Route>

        <Route exact path="/death">
          <DeathPage/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
