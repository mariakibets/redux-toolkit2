import React from 'react'
import styles from './Hader.module.scss';
import cx from 'classnames';
import { useSelector, useDispatch} from 'react-redux';
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';



const { THEMES } = CONSTANTS;

const Header = (props) => {

  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

   const className = cx( styles.header, {
     [styles.darkTheme] : theme === THEMES.DARK,
     [styles.lightTheme] : theme === THEMES.LIGHT
   })


  return (
   <header className={className}>
    <h1>My Site</h1>
        <nav>
            <ul className={styles.navList}>
                <li className={styles.navListItem}>Link 1</li>
                <li className={styles.navListItem}>Link 2</li>
                <li className={styles.navListItem}>Liink 3</li>
            </ul>
        </nav>
        <div>
            <button onClick={() => dispatch(setTheme())}>Switch theme</button>
        </div>
   </header>
  )
}

// const mStP = (state) => {
//     return{
//         theme: state.theme,
//         language: state.lang
//     }
// }

// const mDtP = (dispatch) => {
//     return{
//         setTheme: () => dispatch(setTheme())
//     }
// }

export default (Header);