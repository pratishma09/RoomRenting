import { React, useState } from "react";

const Popup = ({ isVisible, onClose, rooms }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex flex-row justify-center items-center room-details shadow-xl">
      <div className="text-blue-400 bg-white min-w-0 max-w-80 h-full px-10  rounded-lg">
        <button className="font-semibold my-10 flex justify-start" onClick={() => onClose}>
          X{" "}
        </button>
        <p className="text-2xl font-semibold pb-5 text-start">ABOUT THE ROOM</p>
        <img src={`http://localhost:8000/uploads/${rooms.images}`} className="w-[450px] pb-10" />
      </div>
      <div className="min-w-0 max-w-80 px-10 py-8 bg-white rounded-lg text-start">
        <div className="flex">
          <p className="font-semibold">Rs. {rooms.price} </p>
          <p className="italic text-gray-300 font-extralight">/month</p>
        </div>
        <p className="text-sm font-light">Rooms: {rooms.noOfRooms}</p>
        <p className="pt-5 font-semibold">Location</p>
        <p className="font-light text-sm">{rooms.address}</p>
        <div className="flex justify-between">
          <p className="font-semibold py-1 mt-5">Covered Area</p>
          <p className=" bg-blue-400 rounded-lg p-2 text-white mt-5">
            {rooms.coveredArea} sq. ft
          </p>
        </div>
        <p className="font-semibold py-1 mt-5">Amenities</p>
        <div className="grid grid-cols-3 my-2">
          {rooms.amenities.map((amenity, index) => (
            <p
              key={index}
              className="bg-white outline outline-1 outline-gray-400 px-4 py-2 p-2"
            >
              {amenity.trim()} {/* Trim to remove leading/trailing spaces */}
            </p>
          ))}
        </div>
        <p className="font-semibold py-1 mt-5">Description</p>
        <p className="text-gray-600 font-extralight">{rooms.description}</p>
        <div className="flex justify-between">
        <p className="font-semibold py-1 mt-2">Posted date</p>
        <p className="text-gray-600 py-3 font-extralight">{rooms.posted_date.slice(0,10)}</p>
        </div>
        <div className="flex justify-between">
        <p className="font-semibold py-1 mt-2">Closing date</p>
        <p className="text-gray-600 py-3 font-extralight">{rooms.closing_date.slice(0,10)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold py-1 mt-5">Contact:</p>
          <p className=" bg-blue-400 rounded-lg p-2 text-white mt-5">
            {rooms.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
