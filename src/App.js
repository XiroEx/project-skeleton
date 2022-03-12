import { Welcome } from './Pages/Welcome';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, } from "react-router-dom";

import logo from './logo.svg';

const theme = createTheme({
});

function App() {
  return ( 
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="/" element ={ <Welcome logo={logo} />} />
      </Routes>
    </div>

    </ThemeProvider>
  );
}

export default App;
