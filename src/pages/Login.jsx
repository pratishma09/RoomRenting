import React, { useState } from "react";
import axios from "axios"; //for making HTTP requests
import { Link, useNavigate } from "react-router-dom"; //for programmatic navigation
import { BiArrowBack } from "react-icons/bi";
import { useSignIn } from 'react-auth-kit';

const Login = () => {
  const navigate = useNavigate();
  const login=useSignIn();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [error,setError]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(payload);
    //makes a POST request to the login endpoint on the server from the client side
    axios
      .post(`http://localhost:8000/api/login`, payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("hasLoggedIn",true)
        //from authtoken website
        // if(login(
        //   {
        //       token: res.data.token,
        //       expiresIn:res.data.expiresIn,
        //       tokenType: "Bearer",
        //       authState: res.data.authUserState,
        //       refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
        //       refreshTokenExpireIn: res.data.refreshTokenExpireIn     // Only if you are using refreshToken feature
        //   }))
        navigate("/"); //user is navigated to the homepage
        alert("Account logged in");
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        setError(err.response.data.msg);
      });
  };

  function handleChange(event) {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  }

  return (
    <div className="flex items-start w-full h-full">
      <Link to="/">
        <BiArrowBack className="m-3 text-blue-400 position-fixed" />
      </Link>
      <div className="flex flex-col w-1/2 h-screen p-20 place-content-center">
        <p className="text-xl font-semibold mb-4">
          Login to{" "}
          <Link className="text-blue-400" to="/">
            RentYourRoom
          </Link>
        </p>
        <p className="text-sm mb-6">
          Experience the simplicity of room renting at your fingertips.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="pt-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-xs font-bold mb-2 "
            >
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
          <div className="pt-3">
            <label
              htmlFor="password"
              className="block uppercase tracking-wide text-xs font-bold mb-2"
            >
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
          {error && <p className="text-red-500 text-sm my-2">{error}</p>}
          <div className="mb-3 inline-flex">
            <input
              type="checkbox"
              id="exampleCheck1"
            />
            <label className="text-sm ms-2" for="exampleCheck1">
              Remember password
            </label>
          </div>
          <div className="flex flex-col items-center">
            <div className="pt-5 py-3">
              <button
                type="submit"
                className="shadow bg-blue-400 hover:bg-blue-500 py-2.5 px-5 rounded-full text-white"
              >
                Login
              </button>
            </div>
            <div className="flex flex-row">
              <p className="text-sm italic pt-1">Don't have an account?</p>
              <p className=" text-lg ps-1 text-blue-400 hover:text-blue-500">
                <Link to="/signup">Sign in Now</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <img
        src={require("../images/login2.png")}
        className="lg:w-1/2 h-screen flex flex-col p-10"
      />
    </div>
  );
};

export default Login;

