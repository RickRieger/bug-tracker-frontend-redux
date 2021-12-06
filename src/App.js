import MainRouter from './MainRouter';
import './App.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import SnackBar from './components/layout/SnackBar';
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SnackBar/>
      <MainRouter />
    </LocalizationProvider>
  );
}

export default App;
