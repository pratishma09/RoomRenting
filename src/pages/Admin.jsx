import React from "react";

const Admin=()=>{
return(
        <body className="flex flex-row h-screen">
        <nav className="text-white font-semibold bg-blue-300 h-full text-xl w-60">
         <h2 className="px-4 py-10 hover:underline cursor-pointer font-bold">Dashboard</h2>
         <div className="py-4">
        <button className="px-4 py-4 hover:underline cursor-pointer">Posts</button>
        <button className="px-4 py-4 hover:underline cursor-pointer">Logout</button>
        </div>
        </nav>
        <div className="font-bold text-black h-full w-full">
                <div className="text-center">
                <p className="m-20 ">
                Welcome to RentYourRoom
                </p>
                </div>
                </div>
        </body>
)
}

export default Admin;