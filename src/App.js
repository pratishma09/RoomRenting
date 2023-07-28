import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RoomPost from './pages/RoomPost';
import ShowNavbar from './components/ShowNavbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShowNavbar>
          <Navbar/>
        </ShowNavbar>

        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='RoomPost' element={<RoomPost/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
