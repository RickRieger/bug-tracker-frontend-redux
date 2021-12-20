import MainRouter from './MainRouter';
import './App.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import SnackBar from './components/layout/SnackBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN, LOGOUT } from './store/actions/types';
import jwtDecode from 'jwt-decode';
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let getJwtToken = window.localStorage.getItem('jwtToken');
    if (getJwtToken) {
      const currentTime = Date.now() / 1000;
      let decodedJWTToken = jwtDecode(getJwtToken);
      if (decodedJWTToken.exp < currentTime) {
        //logout
        
      } else {
        //login
        console.log(decodedJWTToken)
        const {firstName, lastName, role} = decodedJWTToken
        const user = ({firstName, lastName, role})
        dispatch({type:LOGIN, payload:user})
      }
    }
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SnackBar />
      <MainRouter />
    </LocalizationProvider>
  );
}

export default App;
