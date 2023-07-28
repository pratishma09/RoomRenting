import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Signup() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    firstname: "firstname",
    lastname: "lastname",
    email: "email@email.com",
    password: "password",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(payload);
    axios
      .post(`http://localhost:8000/api/signup`, payload)
      .then((res) => {
        console.log({ res });
        navigate("/");
      })
      .catch((err) => {
        console.log({ err });
        alert(err);
      });
  }

  function handleChange(event) {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  }

  return (
    <body style={{ backgroundColor: "#91B3FA" }}>
      <Link to="/">
        <BiArrowBack className="m-3 position-fixed" style={{ color: "#91B3FA" }}/>
      </Link>
      <div className="d-flex justify-content-center align-items-center rounded bg-light loginContainer">
        <div className="box-1 mt-md-0 mt-5 rounded-end-2 p-4 position-relative div-content">
        <p className="position-absolute top-0">
      </p>
        <p className="text-center fw-semibold fs-4" style={{ color: "#1C3770" }}>
            JOIN US NOW !
          </p>
        <img
            src={require("../images/signup2.png")}
            alt="Signup"
          />
          
          <p
            className="fw-lighter fst-italic lh-1 text-body-tertiary text-center mx-auto position-absolute bottom-0 start-50 translate-middle-x"
            style={{ width: "27rem" }}
          >
            Whether you're a student, professional, or traveler, our platform
            connects you with a variety of affordable and comfortable
            accommodations. Create your account now and start exploring a world
            of hassle-free room rentals.
          </p>
        </div>
        <div className="box-1 d-flex flex-column p-5 rounded-start-2 bg-light shadow-lg">
        <div className="mt-5">
          <h6>
            Welcome to{" "}
            <u>
              <Link to="/" style={{ color: "#91B3FA" }}>
                RentYourRoom
              </Link>
            </u>{" "}
            !{" "}
          </h6>
          Sign up and discover a seamless way to find and rent rooms.
          <form onSubmit={handleSubmit}>
            <div className="row mt-3">
              <div className="mb-3 col">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" for="exampleCheck1">
                I accept the terms and conditions.
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn px-4 text-light mb-2 text-center px-5"
                style={{ backgroundColor: "#91B3FA", borderRadius: "30px" }}
              >
                Sign In
              </button>
              <ul className="list-inline pt-3">
                <li className="list-inline-item fw-lighter fs-6 text-center fst-italic">
                  Have an account?
                </li>
                <li className="list-inline-item text-decoration-underline">
                  <Link to="/login" style={{ color: "#91B3FA" }}>
                    Login Now
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
        </div>
      </div>
    </body>
  );
}

export default Signup;
