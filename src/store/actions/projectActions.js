import Axios from "../../utils/Axios";

export const submitNewProject =
  ({ projectName, description, startDate, endDate, priority }) =>
  async (dispatch) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ projectName, description, startDate, endDate, priority });

    try {
      const res = await Axios.post('/api/project/create-project', body, config);
    
      console.log(res);

    } catch (err) {
      console.log('reg err-----', err.response.data.message);
      // const errors = err.response.data.errors;

      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      // }

      // dispatch({
      //   type: REGISTER_FAIL,
      // });
    }
  };