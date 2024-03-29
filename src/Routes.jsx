import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Projects from './Projects';
import TronBackground from './TronBackground';

function Routes() {
  return (
    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />

    </Switch>
  );
}

export default Routes;