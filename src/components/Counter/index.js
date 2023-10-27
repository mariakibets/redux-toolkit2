import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  const language = useSelector((state) => state.lang);
  const theme = useSelector((state) => state.theme);
  const {count, step} = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const setLanguage = (neewLang) => dispatch(setLang(neewLang));
  const steNewStep = (newStep) => dispatch(setStep(newStep))

  const translation = translations.get(language);
  const{ countText, stepText, incrementText, decermentText} = translation
    // console.log(props);

    const className = cx({
      [styles.darkTheme] : theme === THEMES.DARK,
      [styles.lightTheme] : theme === THEMES.LIGHT
    })


  return (
    <div className={className}>
      <select value={language} onChange={({target: {value}}) => setLanguage(value)}>
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
         onChange={({target: {value}}) => steNewStep(value)}/>
      </label>
      <p>{stepText}: {step} </p>
      <button onClick={() => dispatch(increment())}>{incrementText}</button>
      <button onClick={() => dispatch(decrement())}>{decermentText}</button>
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
