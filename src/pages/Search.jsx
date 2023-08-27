import React, { useEffect, useState } from "react";
import axios from "axios"; //for making HTTP requests
import { Link, useNavigate , useParams  } from "react-router-dom"; //for programmatic navigation
import { BiArrowBack } from "react-icons/bi";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Search=()=>{
  const[showPopUp, setShowPopUp]=useState(false);
  const {search,minPrice,maxPrice}=useParams()
  const [visible, setVisible] = useState(8);
  const [rooms,setRooms]=useState([])
  const [loading,setLoading]=useState(false);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 4);
  };

  const handlePopUp=()=>{
    setShowPopUp(!showPopUp);
  }
  
  
  useEffect(()=>{
    if(search||minPrice || maxPrice){
      axios
      .get(`http://localhost:8000/api/rooms?search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
      .then((res) => {
        console.log(res.data);
        setRooms(res.data);
        setLoading(true)
      })
      .catch((err) => {
        console.log(err.msg);
      });
    }
    },[]
  )
  
    return(
      <div>
        {
          loading?
        <div>
      <Navbar/>
        <div className="pl-10 pt-10">
            <div className="inline-flex">
            <Link to="/">
          <BiArrowBack className="m-3 text-blue-400" />
            </Link>
            <p className="text-blue-500 font-semibold pt-2">Search results:</p>
            </div>
            
            {
              rooms &&
            <div className="grid grid-cols-4 px-10">

            {rooms.slice(0, visible).map((rooms) => (
              <button className="card p-2" onClick={handlePopUp} key={rooms._id}>
                  <img src={`http://localhost:8000/uploads/${rooms.images}`} className="w-[400px] h-[200px]" />
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-blue-400 text-sm">{rooms.address}</p>
                    <p className="italic text-xs text-gray-700 mt-2 pl-2">
                      No. of rooms: {rooms.noOfRooms}
                    </p>
                  </div>
                  <div>
                    <p className="italic text-xs text-gray-700">
                      Rs. {rooms.price}
                    </p>
                    <button
                      className="pt-6 italic text-xs text-gray-400"
                      onClick={handlePopUp}
                    >
                      View more {">"}
                    </button>
                    <Popup
                      isVisible={showPopUp}
                      rooms={rooms}
                      onClose={handlePopUp}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
          }
          {
          !rooms.length &&
          <h1>No results found.</h1>
          }
        </div>
        <Footer/>
        </div>:
        <div className="flex flex-col items-center mt-20 pt-20">
        
        <ClimbingBoxLoader
        color="gray"
        size={15}
        />
        
        </div>
}
        </div>
    )
}

export default Search;