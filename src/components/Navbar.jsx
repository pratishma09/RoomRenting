import { React, useState } from "react";
import { Link } from "react-router-dom";
import {BiListUl} from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <div className=" w-full shadow-md">
    <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
      <div className="text-xl text-blue-400 font-semibold">
      <Link to="/" > RENTYOURROOM</Link>
      </div>
      <div>
        </div>

        <div onClick={()=>setIsOpen(!isOpen)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <BiListUl className={isOpen?'close':'menu'}/>
        </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${isOpen?'top-20 opacity-100':'top-[-490px} opacity-0'} md:opacity-100`}>
        <li className="md:ml-8 text-xl md:my-7 pl-5">
        <Link to ="/login">Login</Link>
        </li>
        <button className="bg-blue-400 text-white font-semibold py-2 px-6 rounded-full md:ml-8 hover:bg-blue-500">
          <Link to ="/signup">Signup</Link>
        </button>
      </ul>
      
    </div>
  </div>;
};

export default Navbar;

