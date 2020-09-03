import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestNumber } from './redux/actions';

function DisplayRandomNumber({ number }) {
  return <h2>Random number: {number}</h2>;
}
function DisplayError({ error }) {
    return <h2 style={{ color: 'red' }}>{error}</h2>;
}

function Loader() {
  return <h2>Cargando...</h2>;
}

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  let componentToDisplay = null;

  if(isLoading){
    componentToDisplay = <Loader />;
  } else if (error) {
    componentToDisplay = <DisplayError  error={error}/>;
  } else {
    componentToDisplay = <DisplayRandomNumber number={number} />;
  }

  return (
    <>
      {componentToDisplay}
      <div>
        <button
          onClick={() => {
            dispatch(requestNumber());
          }}
        >
          Request new number
        </button>
      </div>
    </>
  );
}

export default App;
