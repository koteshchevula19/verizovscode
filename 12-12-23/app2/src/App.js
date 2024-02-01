import logo from './logo.svg';
import './App.css';
// import User from './Components/User'
import User2 from './Components/customer'
import Header from './Components/Header';
import Crud from './Components/crud';
import { Routes, Route } from 'react-router-dom'
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/update';
import Delete from './Components/delete';
import Edit from './Components/Edit';
function App() {
  return (

    <>
      <Header /><br />
      {/* <Routes> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Routes>
            <Route path='/' element={<Crud />}>   </Route>
            <Route path='/create' element={<Crud />}>   </Route>
            <Route path='/read' element={<Crud />}>   </Route>
            <Route path='/update' element={<Crud />}>   </Route>
            <Route path='/delete' element={<Crud />}>   </Route>
            <Route path='/edit' element={<Crud />}> </Route>
            
            </Routes>
            </div>
            <div className="col-sm-9">
              <Routes>
            {/* <Route path='/' element={<User2 />}>   </Route> */}
            <Route path='/user' element={<User2 />}>   </Route>
           <Route path='/create' element={<Create />}> </Route>
           <Route path='/read' element={<Read />}> </Route>
           <Route path='/update' element={<Update />}> </Route>
           <Route path='/delete' element={<Delete />}> </Route>
           <Route path='/edit' element={<Edit />}> </Route>
           
            </Routes>

            </div>

          </div>

        </div>
      {/* </Routes> */}
    </>
  );
}

export default App;
