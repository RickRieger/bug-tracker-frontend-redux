import jwtDecode from "jwt-decode";
import setAxiosAuthToken from "./setAxiosAuthToken";
import { useDispatch } from "react-redux";
const useCheckIfUserIsAuth = () => {
  const dispatch = useDispatch()
  //check if token exists, if it doesnt exists return false
  //if it does exists, check if token valid (meaning not expired)
  //if expired return false
  //else return true
  let getJwtToken = window.localStorage.getItem("jwtToken");
  console.log(getJwtToken)
  if (getJwtToken) {
    const currentTime = Date.now() / 1000;
    let decodedToken = jwtDecode(getJwtToken);
    if (decodedToken.exp < currentTime) {
      setAxiosAuthToken(null);
      return false;
    } else {
      setAxiosAuthToken(getJwtToken);
      return true;
    }
  } else {
    return false;
  }
};
export default useCheckIfUserIsAuth;