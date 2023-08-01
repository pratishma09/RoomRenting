import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
        alert("Set up proper credentials.");
      });
  }

  function handleChange(event) {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  }

  return (
    <div className="flex items-start justify-around w-full h-screen">
      <div className="flex flex-row w-full">
        <Link to="/">
          <BiArrowBack className="m-3 text-blue-400" />
        </Link>
        <div className="flex flex-row relative w-1/2">
          <div className="absolute top-[10%] left-[10%]">
            <p className="text-2xl text-blue-400 font-semibold text-center pb-3">
              JOIN US NOW !
            </p>

            <img
              src={require("../images/signup2.png")}
              alt="Signup"
              className=""
            />

            <p className="text-center text-base font-extralight italic ps-5">
              Whether you're a student, professional, or traveler, our platform
              connects you with a variety of affordable and comfortable
              accommodations. Create your account now and start exploring a
              world of hassle-free room rentals.
            </p>
          </div>
        </div>

        {/* Row 2: Form */}
        <div className="flex flex-row m-10 w-1/2">
          <div className="flex flex-col px-10 py-20">
            <p className="text-xl font-semibold mb-2">
              Welcome to{" "}
              <Link className="text-blue-400" to="/">
                RentYourRoom
              </Link>{" "}
            </p>
            <p className="text-sm">
              Sign up and discover a seamless way to find and rent rooms.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg pt-10">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="firstname"
                    name="firstname"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label htmlFor="name" className="block uppercase tracking-wide text-xs font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block uppercase tracking-wide text-xs font-bold mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="block uppercase tracking-wide text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 inline-flex">
                <input
                  type="checkbox"
                  id="exampleCheck1"
                  required
                />
                <label
                  className=" text-sm ms-2"
                  for="exampleCheck1"
                >
                  I accept the terms and conditions.
                </label>
              </div>
              <div className="flex flex-col items-center">
                <div className="pt-5 py-3">
                  <button
                    type="submit"
                    className="shadow bg-blue-400 hover:bg-blue-500 py-2.5 px-5 rounded-full text-white">
                    Sign In
                  </button>
                </div>
                <div className="flex flex-row">
                  <p className="text-sm italic pt-1">
                    Have an account?
                  </p>
                  <p className=" text-lg ps-1 text-blue-400 hover:text-blue-500">
                    <Link to="/login">
                      Login Now
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
