import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';



const Counter = (props) => {
  console.log(props);
  const { count, step, dispatch, increment, decrement, setStep} = props
  return (
    <div>
      <p> count: {count} </p>
      <label>
        Step:
        <input
         type="number" 
         value={step}
         onChange={({target: {value}}) => setStep(value)}/>
      </label>
      <p>Step: {step} </p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>

  );
}

function  mapStateToProps (state){
  return {
    count: state.count,
    step: state.step,
  }
}

//v1
// function  mapDispatchToProps (dispatch) {
//   return {
//       incrementCb: () =>  dispatch(increment()),
//       decrementCb: () => dispatch(decrement()),
//       setStepCb: ({target: {value}}) => dispatch(setStep(value))
//     }
//   }


//v2
 const mapDispatchToProps = {
  increment,
  decrement,
  setStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
