import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Toolbar from '../components/Toolbar/Toolbar';
import Home from '../components/Home/Home';
import Favorites from '../components/Favorites/Favorites';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Toolbar></Toolbar>

        <div className="app__content-wrapper">
          <div className="app__content">

            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Redirect to={{ pathname: "/home" }} />
            </Switch>

          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

