import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="content">
          <h1>App component</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
