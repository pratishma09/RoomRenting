import React, { useEffect, useState } from "react";
import axios from "axios"; //for making HTTP requests
import { Link, useNavigate , useParams  } from "react-router-dom"; //for programmatic navigation
import { BiArrowBack } from "react-icons/bi";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";

const Search=()=>{
  const[showPopUp, setShowPopUp]=useState(false);
  const {search}=useParams()
  const [visible, setVisible] = useState(8);
  const [rooms,setRooms]=useState([])
  console.log(search)

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 4);
  };

  const handlePopUp=()=>{
    setShowPopUp(!showPopUp);
  }
  
  
  useEffect(()=>{
    if(search){
      axios
      .get(`http://localhost:8000/api/rooms?search=${search}`)
      .then((res) => {
        console.log(res.data.items);
        setRooms(res.data.items);
      })
      .catch((err) => {
        console.log(err.msg);
      });
    }
    },[]
  )
  
    return(
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
                {/* {rooms.photos.length === 0 ? ( 
                   <img src={require("../images/login2.png")} />
                ) : ( */}
                  <img src={rooms.photos} />
                 {/* )}  */}
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
        </div>
    )
}

export default Search;