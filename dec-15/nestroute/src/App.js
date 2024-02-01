import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePage from './Components/Homepage';
import Userpage from './Components/Userpage';
import Sidebar from './Components/Sidebar';
import Userinfo from './Components/Userinfo';
function App() {
  return (

    <>

      <Header></Header>
      <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/user' element={<Userpage />}></Route>
            <Route path='/user/:userId' element={<Userinfo />}></Route>
          </Routes>
      <div className='container-fluid' >
        <div className='row'>
         
        </div>
        <div className='row'>
          <div className='col-3'>
            <Routes>
            <Route path='/' element={<Sidebar />}   ></Route>
            </Routes>
            </div> 

            <div className='col-9'>
            <Routes>
            <Route path='/home' element={<HomePage />}   ></Route>
            </Routes>
              </div>       
          
            </div>
      </div>






    </>


  );
}

export default App;
