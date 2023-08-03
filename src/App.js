import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from 'react-auth-kit'
import './index.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RoomPost from './pages/RoomPost';
import Search from './pages/Search';
import {RequireAuth} from 'react-auth-kit'
import Navbar from "./components/Navbar";  //for private route
import Admin from"./pages/Admin";

function App() {
  return (
      <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
      <BrowserRouter>

        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path={'/secure'} element={
          <RequireAuth loginPath={'login'}>
            <Navbar/>
          </RequireAuth>
          }/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='RoomPost' element={<RoomPost/>}/>
          <Route path='search/:search' element={<Search/>}/>
          <Route path='Admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
