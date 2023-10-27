import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import styles from './Counter.module.scss';


const {
  LANGUAGE: {
    EN_US, UA_UA
  },
  LANGUAGE,
  THEMES
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
  const { count, step, dispatch, languaage, theme,  increment, decrement, setStep, setLang} = props;
  const translation = translations.get(languaage);
  const{ countText, stepText, incrementText, decermentText} = translation
    // console.log(props);

    const className = cx({
      [styles.darkTheme] : theme === THEMES.DARK,
      [styles.lightTheme] : theme === THEMES.LIGHT
    })


  return (
    <div className={className}>
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
    languaage: state.lang,
    theme: state.theme
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
