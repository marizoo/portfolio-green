import {useContext} from 'react'
import Toggle from './components/Toggle';
import { ThemeContext } from './context'



const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const darkyMode = {
    backgroundColor: darkMode ? "#222" : "white",
    color: darkMode && "white",
  }

  return (
  <div style={darkyMode}>
      <Toggle />
    Hello world App!
  </div>

  )};

export default App;