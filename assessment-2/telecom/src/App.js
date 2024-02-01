// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import UserActivity from './UserActivity';
import NetworkMetrics from './NetworkMetrics';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
         <Routes>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<NetworkMetrics />}></Route>
          <Route path='/useractivity' element={<UserActivity />}></Route>
         </Routes>
         <p>Hello World</p>
    </div>
  );
}

export default App;
