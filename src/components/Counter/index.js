import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';

const {
  LANGUAGE: {
    EN_US, UA_UA
  },
  LANGUAGE
} = CONSTANTS

const translations = new Map([
  [
    EN_US.VALUE,
    {
      countText: 'Count',
      stepText: 'Step',
      incrementText: 'Increment',
      decermentText: 'Decrement'
    }
  ],
  [
    UA_UA.VALUE,
    {
      countText: 'Стан лічильника',
      stepText: 'Крок',
      incrementText: 'Збільшення',
      decermentText: 'Зменьшення'
    }
  ]
])


const Counter = (props) => {
  // console.log(props);
  const { count, step, dispatch, languaage,  increment, decrement, setStep, setLang} = props;
  const translation = translations.get(languaage);
  const{ countText, stepText, incrementText, decermentText} = translation
  return (
    <div>
      <select value={languaage} onChange={({target: {value}}) => setLang(value)}>
        {Object.values(LANGUAGE).map((langObj) => (
          <option key={langObj.VALUE} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
        ))}
      </select>
      <p> {countText}: {count} </p>
      <label>
       {stepText}:
        <input
         type="number" 
         value={step}
         onChange={({target: {value}}) => setStep(value)}/>
      </label>
      <p>{stepText}: {step} </p>
      <button onClick={() => increment()}>{incrementText}</button>
      <button onClick={() => decrement()}>{decermentText}</button>
    </div>

  );
}

function  mapStateToProps (state){
  return {
    ...state.counter,
    languaage: state.lang
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
  setStep,
  setLang
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
