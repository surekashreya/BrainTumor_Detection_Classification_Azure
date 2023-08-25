import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import CustomVision from './CustomVision';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/detection">
            <CustomVision />
          </Route>
          {/* Add more routes for other pages if needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
