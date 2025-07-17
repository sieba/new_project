import { Routes } from 'react-router-dom';
import './App.css';
import { AdminRoutes } from './Routes/AdminRoutes.jsx';
import { GuestRoutes } from './Routes/GuestRoutes.jsx';
import AuthRoutes from './Routes/AuthRoutes.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        {AuthRoutes()}
        {GuestRoutes()}
        {AdminRoutes()}
      </Routes>
    </div>
  );
}

export default App;
