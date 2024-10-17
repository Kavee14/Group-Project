import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";

import Dashboard from './Pages/Dashboard';



function App() {
    return ( <Router>

            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </Router>


    );
}

export default App;
