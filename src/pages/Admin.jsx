import React, { useEffect, useState } from "react";
import axios from "axios"; //for making HTTP requests
import { Link, useNavigate, useParams } from "react-router-dom"; //for programmatic navigation
import {AiOutlineEdit} from "react-icons/ai";
import {MdDelete} from "react-icons/md";

const Admin = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [rooms, setrooms] = useState([]);
  const [search, setSearch] = useState("");
  const [editingRoom, setEditingRoom] = useState(rooms);

  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  useEffect(()=>{
          fetchRooms();
        },[]
      )
      const fetchRooms = () => {
        axios
          .get(`http://localhost:8000/api/rooms?search=${search}`)
          .then((res) => {
            console.log(res.data);
            setrooms(res.data);
          })
          .catch((err) => {
            console.log(err.msg);
          });
      };


      const editRoom = (rooms) => {
        axios.put(`http://localhost:8000/api/rooms?search=${search}`)
        .then(()=>{
        
        }
        )
      };

      const deleteRoom = (rooms) => {
        axios.delete(`/rooms/${rooms._id}`)
          .then(() => {
            
          })
          .catch((error) => {
            console.error('Error deleting room:', error);
          });
      };
      
  return (
    <div className="flex flex-row h-screen">
      <nav className="text-white font-semibold bg-blue-300 h-full text-xl w-60">
        <h2 className="px-4 py-10 hover:underline cursor-pointer font-bold">
          Dashboard
        </h2>
        <div className="flex flex-col py-4">
          <button className="py-4 text-start px-3 hover:underline cursor-pointer">
            Posts
          </button>
          
        </div>
      </nav>
      <div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th>Location</th>
              <th>Images</th>
              <th>Price</th>
              <th>No. of rooms</th>
              <th>Covered Area</th>
              <th>Amenities</th>
              <th>Description</th>
              <th>Opening date</th>
              <th>Closing date</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((rooms)=>(
              <tr key={rooms._id}>
                <td>{rooms.address}</td>
                <td><img src={`http://localhost:8000/uploads/${rooms.images}`} className="h-[50px]" /></td>
                <td>{rooms.price}</td>
                <td>{rooms.noOfRooms}</td>
                <td>{rooms.coveredArea}</td>
                <td>{rooms.amenities}</td>
                <td>{rooms.description}</td>
                <td>{rooms.posted_date.slice(0,10)}</td>
                <td>{rooms.posted_date.slice(0,10)}</td>
                <td>{rooms.phone}</td>
                <td>
                <button onClick={() => editRoom(rooms._id)}>
                <AiOutlineEdit/>
                </button>
                <button onClick={() => deleteRoom(rooms._id)}>
                <MdDelete/>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default Admin;
