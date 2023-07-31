import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const RoomPost = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [property, setProperty] = useState({
    address: "",
    price: "",
    coveredArea: "",
    description: "",
    amenities: [],
    noOfRooms: "",
    photo: "",
    posted_date: "",
    closing_date: "",
    phone: "",
  });
  const AmenitiesList = [
    "Separate bathroom",
    "24/7 water facility",
    "Internet",
    "Car parking",
    "Bike parking",
    "Kitchen slab",
    "Furnished",
    "Gym",
    "Playing court",
  ];
  const [PropertyAmenities,setPropertyAmenities]=useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file); //"image" as the field name to match the server
    for (const key in property) {
      if (property.hasOwnProperty(key)) {
        formData.append(key, property[key]);
      }
    }
    axios
      .post(`http://localhost:8000/api/rooms`, file)
      .then((res) => {
        console.log(res);
        navigate("/"); //user is navigated to the homepage
      })
      .catch((err) => {
        alert(err.msg);
      });
  };

  function handleChange(event)
    {
      if(event.target.type==='file'){
        setFile(event.target.files[0]);
        //setProperty({...property.photo,...event.target.files});
      }
      else{
        setProperty({ ...property, [event.target.name]: event.target.value });
      }
    }
  

  const handleAmenityChange=(amenity)=>{
    if(PropertyAmenities.includes(amenity)){
      setPropertyAmenities(PropertyAmenities.filter((a)=>a!==amenity));   //to uncheck
    }
    else{
      setPropertyAmenities([...PropertyAmenities,amenity]);
    }
  }
  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full justify-center items-center bg-gradient-to-b from-blue-300 to-blue-500">
        <div className="w-[600px] bg-blue-100 my-20 rounded-lg border-4">
          <Link to="/">
            <BiArrowBack className="m-2 text-white position-fixed" />
          </Link>
          <form onSubmit={handleSubmit} className="m-10">
            <p className="text-xl font-semibold mb-4">
              NEED TO RENT YOUR ROOM?
            </p>
            <p className="text-sm mb-6">
              Advertise your room for free with RentYourRoom !
            </p>

            <div className="pt-2">
              <label
                htmlFor="address"
                className="block uppercase tracking-wide text-xs font-bold mb-2"
              >
                Property Address
              </label>
              <input
                value={property.address}
                type="text"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="address"
                name="address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-row justify-between mt-3">
              <div className="mb-3 col pr-20">
                <label
                  htmlFor="price"
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                >
                  Price
                </label>
                <input
                  value={property.price}
                  type="number"
                  min="0"
                  step="1000"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="price"
                  name="price"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col">
                <label
                  htmlFor="covered-area"
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                >
                  Covered Area
                </label>
                <input
                  value={property.coveredArea}
                  type="double"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="coveredArea"
                  name="coveredArea"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className=" mb-3">
              <label
                htmlFor="description"
                className="block uppercase tracking-wide text-xs font-bold mb-2"
              >
                Description
              </label>
              <textarea
                value={property.description}
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="description"
                name="description"
                onChange={handleChange}
                required
              />
            </div>

            <div className=" mb-3">
              <label
                htmlFor="phone"
                className="block uppercase tracking-wide text-xs font-bold mb-2"
              >
                Phone
              </label>
              <input
                value={property.phone}
                type="number"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="phone"
                name="phone"
                onChange={handleChange}
                required
              />
            </div>

            <div className=" mb-3">
              <label
                htmlFor="amenity"
                className="block uppercase tracking-wide text-xs font-bold mb-2"
              >
                Amenities
              </label>
              <div className="grid grid-cols-3 grid-rows-3">
                {AmenitiesList.map((amenity) => (
                  <div key={amenity}>
                    <input
                      className="ps-2"
                      type="checkbox"
                      id={amenity}
                      name="amenity"
                      checked={PropertyAmenities.includes(amenity)}
                      onChange={() =>handleAmenityChange(amenity)}
                    />
                    <label className="" htmlFor={amenity}>
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="noOfRooms"
                className="block uppercase tracking-wide text-xs font-bold mb-2"
              >
                Number of Rooms
              </label>
              <input
                value={property.noOfRooms}
                type="number"
                min="1"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="noOfRooms"
                name="noOfRooms"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flew-row justify-between mb-3">
              <div className="mb-3">
                <label
                  htmlFor="postedDate"
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                >
                  Posted Date
                </label>
                <input
                  value={property.posted_date}
                  type="date"
                  className="appearance-none block bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                  id="postedDate"
                  name="posted_date"
                  onChange={handleChange}
                  pattern="\d{4}-\d{2}-\d{2}"
                  required
                /> 
                {/* fallback function for date */}
              </div>
              <div className="mb-3 col">
                <label
                  htmlFor="closingDate"
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                >
                  Closing date
                </label>
                <input
                  value={property.closing_date}
                  type="date"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                  id="closingDate"
                  name="closing_date"
                  onChange={handleChange}
                  pattern="\d{4}-\d{2}-\d{2}"
                  required
                />
              </div>
            </div>
            <div className=" my-5">
              <label
                htmlFor="image"
                className="block uppercase tracking-wide text-xs font-bold mb-2"
              >
                Main Photo
              </label>
              {property.photo &&
                property.photo.map(photo=>{
                  let src="";
                  if(typeof(photo)==="string"){
                    src=photo
                  }
                  else{
                    src=URL.createObjectURL(photo)
                  }
                  return <img key={src} src={src} className="m-[10px] w-[150px] h-[150px]"/>
                })
              }

              <input
                type="file"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
                aria-label="Upload"
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="shadow bg-blue-400 hover:bg-blue-500 py-2.5 px-5 rounded-full text-white"
              >
                Submit for Approval
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomPost;