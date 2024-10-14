import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";
import NavBar1 from "./components/NavBar1";



function App() {
    return ( <Router>
            <NavBar1/>
            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>

        </Router>


    );
}

export default App;
