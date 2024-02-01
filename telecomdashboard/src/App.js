import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import NetworkMetrics from './NetworkMetrics';
import UserActivity from './UserActivity';
import Dashboard from './Dashboad';

function App() {
  return (
   <div>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/networkmetrics' element={<NetworkMetrics />}></Route>
        <Route path='/useractivity' element={<UserActivity />}></Route>
      </Routes>
      <p>Hello World</p>
    </div>
  );
}

export default App;
