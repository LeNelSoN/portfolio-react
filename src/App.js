import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Links from './components/Links'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Skills' element={<Skills />}/>
          <Route path='/Projects' element={<Projects />}/>
          <Route path='/Links' element={<Links />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
