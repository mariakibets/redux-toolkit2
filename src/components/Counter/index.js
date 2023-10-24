import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/slices/counterSlice';



const Counter = (props) => {
  console.log(props);
  const { count, step, dispatch } = props
  return (
    <div>
      <p> count: {count} </p>
      <p>Step: {step} </p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>

  );
}

function  mapStateToProps (state){
  return state
}

// const whithState = connect(mapStateToProps);

// const counterWithState = whithState(Counter);

export default connect(mapStateToProps)(Counter);
