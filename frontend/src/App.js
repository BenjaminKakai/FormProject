import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import DataFetch from './DataFetch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/fetch" component={DataFetch} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
