import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RoomPost from './pages/RoomPost';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='RoomPost' element={<RoomPost/>}/>
          <Route path='search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
