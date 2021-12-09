import {useContext} from 'react'
import About from './components/About';
import Intro from './components/Intro';
import ProductList from './components/ProductList';
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
      <Intro />
      <About />
      <ProductList />
  </div>

  )};

export default App;