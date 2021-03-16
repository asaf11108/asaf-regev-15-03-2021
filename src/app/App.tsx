import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../components/Home/Home';
import Favorites from '../components/Favorites/Favorites';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app__content-wrapper">
        <div className="app__content">
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Redirect to={{ pathname: "/home" }}/>
            </Switch>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

