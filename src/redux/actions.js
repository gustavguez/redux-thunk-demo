import axios from 'axios';

export const FETCH_NUMBER = 'FETCH_NUMBER';
export const FETCH_NUMBER_SUCCESS = 'FETCH_NUMBER_SUCCESS';
export const FETCH_NUMBER_ERROR = 'FETCH_NUMBER_ERROR';

export const requestNumber = () => {
  return async function (dispatch) {
    dispatch({
      type: FETCH_NUMBER,
    });

    try {
      const response = await axios.get(
        'https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new'
      );

      dispatch({
        type: FETCH_NUMBER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_NUMBER_ERROR,
        payload: error.message,
      });
    }
  };
};
