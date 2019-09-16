import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    const context = {
      user: this.state.user,
      setUser: this.setUser
    }
    return (
      <Fragment>
        <Router>
          {/* <UserContext.Provider value={context}> */}
          <layout.Nav />
          <main>
            <Switch>
              <Route path='/' exact component={routes.Home} />
              <Route path='/contact' component={routes.Contact} />
              <Route path='/projects' exact component={routes.Projects} />
              <Route path='/projects/:id' component={routes.SingleProject} />
              <Route path='/education' component={routes.Education} />
              <Route path='/resume' component={routes.Resume} />
              {/* <Route path='/stats' component={routes.Stats} /> */}
              <Route path='/internal-error' component={routes.InternalError} />
              <Route path='/' component={routes.NotFound} />
            </Switch>
          </main>
          {/* </UserContext.Provider> */}
        </Router>
        <layout.Footer />
      </Fragment>
    );
  }
}


export default App;
