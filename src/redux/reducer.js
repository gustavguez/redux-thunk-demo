import {
  FETCH_NUMBER,
  FETCH_NUMBER_ERROR,
  FETCH_NUMBER_SUCCESS,
} from './actions';

const initialState = {
  number: 0,
  isLoading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NUMBER:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_NUMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        number: action.payload,
      };
    case FETCH_NUMBER_ERROR:
      return {
        ...state,
        isLoading: false,
        number: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
