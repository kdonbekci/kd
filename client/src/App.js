import React, { Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from './routes';
import * as layout from './components/layout';

function App() {
  return (
    <Fragment>
      <Router>
        {/* <layout.Header /> */}
        <layout.Nav />
        <main>
          <Switch>
            <Route path='/' exact component={routes.Home} />
            <Route path='/contact' component={routes.Contact} />
            <Route path='/projects' exact component={routes.Projects} />
            <Route path='/projects/:id' component={routes.SingleProject} />
            <Route path='/education' component={routes.Education} />
            <Route path='/resume' component={routes.Resume} />
            <Route path='/stats' component={routes.Stats} />
            <Route path='/internal-error' component={routes.InternalError} />
            <Route path='/' component={routes.NotFound} />
          </Switch>
        </main>
      </Router>
      <layout.Footer />
    </Fragment>
  );
}

export default App;
