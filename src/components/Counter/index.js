import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
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

  const language = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);
  const {count, step} = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const actionCreators =  bindActionCreators(
    {setLang, setStep, increment, decrement},
    dispatch
    )

  const translation = translations.get(language);
  const{ countText, stepText, incrementText, decermentText} = translation
    // console.log(props);

    const className = cx({
      [styles.darkTheme] : theme === THEMES.DARK,
      [styles.lightTheme] : theme === THEMES.LIGHT
    })


  return (
    <div className={className}>
      <select value={language} onChange={({target: {value}}) => actionCreators.setLang(value)}>
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
         onChange={({target: {value}}) => actionCreators.setStep(value)}/>
      </label>
      <p>{stepText}: {step} </p>
      <button onClick={() => actionCreators.increment()}>{incrementText}</button>
      <button onClick={() => actionCreators.decrement()}>{decermentText}</button>
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



export default Counter;
