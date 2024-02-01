import logo from './logo.svg';
import './App.css';
import Product from './Components/Product'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom'
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import Info from './Components/Info';
import Fetching1 from './Components/NetworkMetrics';
// import {}

function App() {
  return (
    <>
      {/* <div className="container-fluid"> */}
        {/* <div className="row">
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div><hr></hr>
        <div className="row">
          */}
          {/* <div className="col"> */}

            {/* <Routes>
              <Route path='/products' element={<Product />}></Route>
              <Route path='/edit' element={<Edit />}></Route>
              <Route path='info' element={<Info />}></Route>
              <Route path='/del' element={<Delete />}></Route>
            </Routes> */}
            <Fetching1 />
          {/* </div>
        </div>


      </div> */}
    </>
  );
}

export default App;
