import React, { useState } from "react";
import axios from "axios"; //for making HTTP requests
import { Link, useNavigate } from "react-router-dom"; //for programmatic navigation
import { BiArrowBack } from "react-icons/bi";
import Popup from "../components/Popup";
import Navbar from "../components/Navbar";

const Search=()=>{
  const[showPopUp, setShowPopUp]=useState(false);
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
            <div className="grid grid-cols-4 px-10">
            <button className="card" onClick={setShowPopUp} >
              <Link to="/"></Link>
              <img src={require("../images/login2.png")} />
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-blue-400 text-sm">Chabahil</p>
                  <p className="italic text-xs text-gray-700 mt-2">
                    No. of rooms: 1{" "}
                  </p>
                </div>
                <div>
                  <p className="italic text-xs text-gray-700">Rs.4000</p>
                  <button className="pt-6 italic text-xs text-gray-400 hover:text-blue-500" onClick={setShowPopUp}>
                    View more {">"}
                  </button>
                </div>
              </div>
            </button>
            <Popup isVisible={showPopUp}  onClose={()=>setShowPopUp(false)}/>
          </div>
        </div>
        </div>
    )
}

export default Search;