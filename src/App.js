import MainRouter from './MainRouter';
import './App.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MainRouter />
    </LocalizationProvider>
  );
}

export default App;
