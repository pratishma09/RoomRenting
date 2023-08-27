import { React, useState, useEffect } from "react";
import Footer from "../components/Footer";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import image from "../images/home.jpg";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [search, setSearch] = useState("");
  const [rooms, setrooms] = useState([]);
  const [visible, setVisible] = useState(4);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading,setLoading]=useState(false);
  
  const showMoreItems = () => {
    setVisible((preValue) => preValue + 8);
    console.log()
  };

  const showLessItems=()=>{
    setVisible(4);
  }

  const handlePopUp=()=>{
    setShowPopUp(!showPopUp);
  }

  const debounce = (mainFunc, delay=500) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        mainFunc();
      }, delay);
    };
  };

  const fetchRooms = () => {
    axios
      .get(`http://localhost:8000/api/rooms?search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
      .then((res) => {
        setrooms(res.data);
        setLoading(true);
        
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  useEffect(() => {
    const debouncedFetchRooms = debounce(fetchRooms);
    debouncedFetchRooms();
  }, [search, minPrice, maxPrice]);   //defines how many times it will be executed

  return (
    <div>
      {
      loading?
      <div>
      <Navbar />
      <div className="relative w-screen bg-cover h-screen" style={{backgroundImage:`url(${image})`}}>
        
        <div className="flex flex-col text-center h-1/2">
          <p className="font-semibold text-5xl mt-20 pt-20 text-gray-500">
            ROOMS EVERYWHERE
          </p>
          <div className="flex flex-row bg-white py-5 px-5 rounded-xl mt-20 w-1/2 self-center">
            <input
              type="search"
              id="search"
              name="search"
              className=" italic text-gray-600 text-sm px-15 outline-none w-80"
              placeholder="search location"
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
            type="number"
            min="0"
            placeholder="Min Price"
            value={minPrice}
            className="w-30 italic text-sm"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            className="w-30 italic text-sm"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
            { (search || minPrice || maxPrice) && 
            <Link to={`/Search/${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`}>
              <BiSearch className="text-blue-400 text-lg font-semibold"/>
            </Link>
            }
            
          </div>
          
        </div>
      </div>
      <div className="px-5">
        <p className="text-blue-400 italic text-md mt-5">
          Find the rooms that fits your lifestyle.
        </p>
        <p className="text-slate-500 italic text-sm">
          We have a solution for all your rooms queries.
        </p>
        <p className="font-semibold text-blue-400 mt-5">Popular</p>
        <div className="flex flex-row justify-between mt-3 text-center">
          <div className="bg-blue-400 w-[200px] h-100 py-20 rounded-xl">
            <button
              className=" text-white font-semibold "
              onClick={() => setSearch("Chabahil")}
            >
              <Link to={`/Search/Chabahil`}>
              Chabahil
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Kalanki")}
            >
              <Link to={`/Search/Kalanki`}>
              Kalanki
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Koteshwor")}
            >
              <Link to={`/Search/Koteshwor`}>
              Koteshwor
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Satdobato")}
            >
              <Link to={`/Search/Satdobato`}>
              Satdobato
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Lazimpat")}
            >
              <Link to={`/Search/Lazimpat`}>
              Lazimpat
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-row m-auto w-[500px] h-[201px] shadow-2xl rounded-2xl mt-10">
          <div className="w-[500px] h-[201px] pl-5 m-auto py-10">
            <p className="font-semibold uppercase text-blue-600 pb-20">
              Post your property
            </p>
            <button className="text-white bg-gradient-to-b from-blue-300 to-blue-600 px-3 py-2 rounded-xl">
              {
                localStorage.getItem("hasLoggedIn")?
              <Link to="./RoomPost">FREE</Link>
              :
              <Link to="./Login">FREE</Link>
              }
            </button>
          </div>
          <div>
            <img
              src={require("../images/post.png")}
              className="w-[500px] h-[200px] pt-5"
              alt={require("../images/post.png")}
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-blue-400 mt-10 mb-5">Newest</p>
          <div className="grid grid-cols-4">
            { 
            rooms.slice(0, visible).map((room) => (
              <RoomCard room={room} />
            ))}
          </div>
          {visible==4?
          <button className="font-semibold text-blue-400 mt-10 text-center w-screen pb-5 hover:text-blue-500" onClick={showMoreItems}>
            View more {">"}
          </button>
          :
          <button className="font-semibold text-blue-400 mt-10 text-center w-screen pb-5 hover:text-blue-500" onClick={showLessItems}>
            View less {">"}
          </button>
          }
        </div>
      </div>
      <Footer />
      </div>
      :
      <div className="flex flex-col items-center mt-20 pt-20">
        
      <ClimbingBoxLoader
      color="gray"
      size={15}
      />
      
      </div>
    }
    </div>
  );
};

export default Home;
