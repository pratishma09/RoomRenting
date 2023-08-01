import { React, useState, useEffect } from "react";
import Footer from "../components/Footer";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import axios from "axios";
import Navbar from "../components/Navbar";
import Search from "./Search";

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [search, setSearch] = useState("");
  const [rooms, setrooms] = useState([]);
  const [visible, setVisible] = useState(4);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 4);
  };

  const handlePopUp=()=>{
    setShowPopUp(!showPopUp);
  }

  const debounce = (mainFunc, delay) => {
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
      .get(`http://localhost:8000/api/rooms?search=${search}`)
      .then((res) => {
        console.log(res.data.items);
        setrooms(res.data.items);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  useEffect(() => {
    const debouncedFetchRooms = debounce(fetchRooms, 500);
    debouncedFetchRooms();
  }, [search]);   //defines how many times it will be executed

  return (
    <div className="w-screen">
      <Navbar />
      <div className="relative w-screen">
        <img src={require("../images/home.jpg")} className="w-full" />
        <div className="flex flex-col absolute top-20 px-[500px] ">
          <p className="font-semibold text-5xl pt-20 text-white">
            ROOMS EVERYWHERE
          </p>
          <div className="flex flex-row left-1/2 bg-white py-5 px-5 rounded-xl mt-20">
            <input
              type="search"
              id="search"
              name="search"
              className=" italic text-gray-500 text-sm px-20 outline-none"
              placeholder="search location"
              onChange={(e) => setSearch(e.target.value)}
            />

            { search && 
            <Link to={`/Search/${search}`}>
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
              <Link to={`/Search/${search}`}>
              Chabahil
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Kalanki")}
            >
              <Link to={`/Search/${search}`}>
              Kalanki
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Koteshwor")}
            >
              <Link to={`/Search/${search}`}>
              Koteshwor
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Satdobato")}
            >
              <Link to={`/Search/${search}`}>
              Satdobato
              </Link>
            </button>
          </div>
          <div className="bg-blue-400 w-[200px] h-100 rounded-xl ml-2">
            <button
              className=" text-white font-semibold py-20"
              onClick={() => setSearch("Lazimpat")}
            >
              <Link to={`/Search/${search}`}>
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
              <Link to="./RoomPost">FREE</Link>
            </button>
          </div>
          <div>
            <img
              src={require("../images/post.png")}
              className="w-[500px] h-[200px] pt-5"
            />
          </div>
        </div>
        <div>
          <p className="font-semibold text-blue-400 mt-10 mb-5">Newest</p>
          <div className="grid grid-cols-4">
            {rooms.slice(0, visible).map((rooms) => (
              <button className="card p-2" onClick={handlePopUp} key={rooms._id}>
                {/* {rooms.photos.length === 0 ? ( */}
                  {/* <img src={require("../images/login2.png")} />
                ) : ( */}
                  <img src={rooms.photos} />
                {/* )} */}
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
          <button className="font-semibold text-blue-400 mt-10 text-center w-screen pb-5 hover:text-blue-500" onClick={showMoreItems}>
            View more {">"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
