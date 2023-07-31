import { React, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
    <footer className="flex flex-row justify-between bg-white px-10">
        <div>
    <p className="text-xl pt-10 text-blue-400 font-semibold">
      <Link to="/" > RENTYOURROOM</Link>
      </p>
      </div>
      <div>
    <p className="italic text-xs text-slate-600 pt-20 text-center">Copyright 2023 RentYourRoom. All rights reserved.</p>
    </div>
    <div>
      <p className="uppercase font-md pb-3 font-semibold">Contact Us</p>
      <p className="text-sm">Address: Kanibahal,Lalitpur</p>
      <p className="text-sm">Email: rentyourroom@gmail.com</p>
      <p className="text-sm">Phone: 977 9832124512</p>
    </div>
  </footer>
    );
};

export default Footer;
