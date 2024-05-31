import './App.css';
import Context from './components/Context/Context';
import { ThemeProvider } from './components/Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Context/>
      </ThemeProvider>
    </div>
  );
}

export default App;
