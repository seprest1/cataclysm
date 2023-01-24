import { HashRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []);

  const users = useSelector(store => store.user);
  console.log(users);

  return (
    <div className="app">
      <header>
        <h1>{users.username && users[0].username}</h1>
      </header>
    </div>
  )
}

export default App;
