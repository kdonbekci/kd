import React, { Fragment, Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from './routes';
import * as layout from './components/layout';
// import { UserContext } from './helpers/contexts';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }
  }

  setUser = (user) => {
    this.setState({ user });
  }

  render() {
    return (
      <Fragment>
        <Router basename='/'>
          <layout.Nav />
          <main>
            <Switch>
              <Route path='/' exact component={routes.Home} />
              <Route path='/contact' component={routes.Contact} />
              <Route path='/projects' exact component={routes.Projects} />
              <Route path='/projects/:id' component={routes.SingleProject} />
              <Route path='/education' component={routes.Education} />
              <Route path='/resume' component={routes.Resume} />
              <Route path='/internal-error' component={routes.InternalError} />
              <Route path='/' component={routes.NotFound} />
            </Switch>
          </main>
        </Router>
        <layout.Footer />
      </Fragment>
    );
  }
}


export default App;
