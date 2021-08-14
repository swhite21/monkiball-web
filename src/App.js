import { Box } from '@material-ui/core';
import './App.css';
import ThreeCanvas from './components/canvas';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Box bgcolor='gray' height='100vh'>
          <Header />
          <ThreeCanvas />
        </Box>
      </header>
    </div>
  );
}

export default App;
