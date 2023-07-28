import {React,useState} from 'react';
import axios from 'axios'
import { Link} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import '../css/renting.css';

const RoomPost = () => {
  const [file, setFile] = useState();
  const [property, setProperty] = useState({
    address: "",
    price: "",
    coveredArea: "",
    description: "",
    amenities: [],
    noOfRooms: "",
    photo: [],
    posted_date: "",
    closing_date: "",
    posted_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  function handleChange(event) {
    // const { name, value, type, checked } = event.target;
    // let newValue = value;

    // setProperty((prevProperty) => ({
    //   ...prevProperty,
    //   [name]:
    //     type === "checkbox"
    //       ? checked
    //         ? [...prevProperty[name], value]
    //         : prevProperty[name].filter((item) => item !== value)
    //       : value,
    // }));
  }
  const handleUpload = (e) => {
    // const formdata = new FormData();
    // formdata.append("file", file);
    // axios
    //   .post(`http://localhost:8000/api/upload`, FormData)
    //   .then((res) => {
    //     console.log(res);
    //     // ...
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // ...
    //   });
  };

  return (
    <body className='p-3' style={{ backgroundColor: "#91B3FA" }}>
      <Link to="/">
        <BiArrowBack
          className="position-fixed text-light m-3"
        />
      </Link>
      <div className="container rounded bg-light p-5" style={{ width: "700px",margin: "50px auto" }}>
      
        <div className="container-sm">
          <h5 style={{ color: "#91B3FA" }}>NEED TO RENT YOUR ROOM?</h5>
          <p className="fs-6">
            Advertise your room for free with RentYourRoom !
          </p>
          <form onSubmit={handleSubmit}>
            <div className="pt-2 form-group">
              <label htmlFor="address" className="form-label">
                Property Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row mt-3">
              <div className="mb-3 col">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number" min="0" step="1000"
                  className="form-control"
                  id="price"
                  name="price"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="covered-area" className="form-label">
                  Covered Area
                </label>
                <input
                  type="double"
                  className="form-control"
                  id="coveredArea"
                  name="coveredArea"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={property.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label>Amenities</label>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {[
                  "Separate bathroom",
                  "24/7 water facility",
                  "Internet",
                  "Car parking",
                  "Bike parking",
                  "Kitchen slab",
                  "Furnished",
                  "Gym",
                  "Playing court",
                ].map((amenity) => (
                  <div
                    className="form-check"
                    key={amenity}
                    style={{ width: "33.33%" }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={amenity}
                      name="amenities"
                      value={amenity}
                      checked={property.amenities.includes(amenity)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={amenity}>
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="noOfRooms">Number of Rooms</label>
              <input
                type="number" min="1"
                className="form-control"
                id="noOfRooms"
                name="noOfRooms"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="row my-3">
              <div className="mb-3 col">
                <label htmlFor="postedDate" className="form-label">
                  Posted Date
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="postedDate"
                  name="postedDate"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="closingDate" className="form-label">
                  Closing date
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="closingDate"
                  name="closingDate"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="file" className="form-label">
                Main Photo
              </label>
              <br />
              <div class="input-group mb-3">
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  id="inputGroupFileAddon03"
                >
                  Upload
                </button>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile03"
                  aria-describedby="inputGroupFileAddon03"
                  aria-label="Upload"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn px-4 text-light mb-2 text-center px-5  "
                style={{ backgroundColor: "#91B3FA", borderRadius: "30px" }}
              >
                Submit for Approval
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default RoomPost;