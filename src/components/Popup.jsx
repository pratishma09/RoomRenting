import {React,useState} from 'react';
    
const Popup = ({ isVisible,onClose, room}) => {
   if(!isVisible) return null;
    return(
        <div className='fixed inset-0 bg-opacity-50 backdrop-blur-sm flex flex-row justify-center items-center room-details'>
            <div className='text-blue-400 bg-white min-w-0 max-w-80 px-10  rounded-lg'>
            <button className='font-semibold my-10' onClick={()=>onClose()}>X </button>
            <p className='text-2xl font-semibold pb-5'>
                ABOUT THE ROOM
            </p>
            <img src={require("../images/login2.png")} className='w-[450px] pb-10'/>
            </div>
            <div className='min-w-0 max-w-80 px-10 py-8 bg-white rounded-lg'>
                <div className='inline-flex'>
                <p className='font-semibold'>Rs. {room.price} </p>
                <p className='italic text-gray-300 font-extralight'>/month</p>
                </div>
                <p className='text-sm font-light'>Rooms: {room.noOfRooms}</p>
                <p className='pt-10 font-semibold'>Location</p>
                <p className='font-light text-sm'>{room.address}</p>
                <div className='flex justify-between'>
                <p className='font-semibold py-1 mt-5'>Covered Area</p>
                <p className=' bg-blue-400 rounded-lg p-2 text-white mt-5'>{room.coveredArea} sq. ft</p>
                </div>
                <p className='font-semibold py-1 mt-5'>Amenities</p>
                <div className='grid grid-cols-3 my-2'>
                    <p className='bg-white outline outline-1 outline-gray-400 px-4 py-2'>{room.amenities}</p>
                </div>
                <p className='font-semibold py-1 mt-5'>Description</p>
                <p className='text-gray-300 font-extralight'>{room.description}</p>
                {/* <div className='flex justify-between'> */}
                {/* <p className='font-semibold py-1 mt-5'>Posted by</p>
                <p className='py-1 mt-5'></p> */}
                
                {/* </div> */}
                <div className='flex justify-between'>
                <p className='font-semibold py-1 mt-5'>Contact:</p>
                <p className=' bg-blue-400 rounded-lg p-2 text-white mt-5'>{room.phone}</p>
                
                </div>
                
            </div>
            
        </div>
    );
};

export default Popup;