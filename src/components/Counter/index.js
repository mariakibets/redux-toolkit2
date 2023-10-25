import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';



const Counter = (props) => {
  console.log(props);
  const { count, step, dispatch, incrementCb, decrementCb, setStepCb} = props
  return (
    <div>
      <p> count: {count} </p>
      <label>
        Step:
        <input
         type="number" 
         value={step}
         onChange={setStepCb}/>
      </label>
      <p>Step: {step} </p>
      <button onClick={incrementCb}>Increment</button>
      <button onClick={decrementCb}>Decrement</button>
    </div>

  );
}

function  mapStateToProps (state){
  return {
    count: state.count,
    step: state.step,
  }
}


function  mapDispatchToProps (dispatch) {
  return {
      incrementCb: () =>  dispatch(increment()),
      decrementCb: () => dispatch(decrement()),
      setStepCb: ({target: {value}}) => dispatch(setStep(value))
    }
  }

// const whithState = connect(mapStateToProps);

// const counterWithState = whithState(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
