import logo from './logo.svg';
import './App.css';
import Userpage from './Components/User';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom'
import About from './Components/About';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Homepage />}></Route>
        <Route path='/user' element={<Userpage />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>

    </>

  )
}

export default App;
