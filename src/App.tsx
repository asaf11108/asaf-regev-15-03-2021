import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="content">
          <h1>App component</h1>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    </ThemeProvider>
  );
}

