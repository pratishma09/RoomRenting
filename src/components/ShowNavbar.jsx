import {React,useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';

const ShowNavbar=({children})=>{
    const location=useLocation();
    const [showNavBar, setshowNavBar]=useState(false)

    useEffect(()=>{
        if(location.pathname==='/login' || location.pathname==='/signup' || location.pathname==='/RoomPost'){
            setshowNavBar(false)
        }
        else{
            setshowNavBar(true)
        }
        console.log(location.pathname);
    },[location])
    return(
        <div>
            {showNavBar && children}
        </div>
    );
}

export default ShowNavbar;