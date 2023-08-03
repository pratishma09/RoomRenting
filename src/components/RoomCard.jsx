import Popup from "./Popup";

const { useState } = require("react")

const RoomCard = ({room}) => {

    const [showPopUp, setShowPopUp] = useState(false);

    const handlePopUp=()=>{
        setShowPopUp(!showPopUp);
      }
      
    return (
    <button className="card p-2" onClick={handlePopUp} key={room._id}>
                
                  <img className="h-[200px]"src={`http://localhost:8000/uploads/${room.images}`}/>
                
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-blue-400 text-sm">{room.address}</p>
                    <p className="italic text-xs text-gray-700 mt-2 pl-2">
                      No. of rooms: {room.noOfRooms}
                    </p>
                  </div>
                  <div>
                    <p className="italic text-xs text-gray-700">
                      Rs. {room.price}
                    </p>
                    <button
                      className="pt-6 italic text-xs text-gray-400"
                      onClick={handlePopUp}
                    >
                      View more {">"}
                    </button>
                    {showPopUp && 
                    <Popup
                      isVisible={showPopUp}
                      rooms={room}
                      onClose={handlePopUp}
                    />
                    
                    }
                  </div>
                </div>
              </button>
                  
    )
}

export default RoomCard;