import React, { useState } from "react";
import axios from "axios"; //for making HTTP requests
import { Link,useNavigate } from "react-router-dom"; //for programmatic navigation
import { BiArrowBack } from "react-icons/bi";
import "../css/App.css";

const Login = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email:'',
    password:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(payload);
    //makes a POST request to the login endpoint on the server from the client side
    axios
      .post(`http://localhost:8000/api/login`, payload)
      .then((res) => {
        console.log(res);
        navigate("/"); //user is navigated to the homepage
      })
      .catch((err) => {
        alert(err.msg);
      });
  };

  function handleChange(event) {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  }

  return (
    <body style={{ backgroundColor: "#91B3FA" }}>
      <Link to="/">
        <BiArrowBack className="m-3 text-light position-fixed" />
      </Link>
      <div className="d-flex justify-content-center align-items-center rounded loginContainer">
        <div className="box-1 d-flex flex-column p-5 rounded-start-2 bg-light">
          <div className="mt-5">
            <h6>
              Login to {" "}
              <u>
                <Link to="/">RentYourRoom</Link>
              </u>
              !
            </h6>
            <p className="text-muted mb-2">
              Experience the simplicity of room renting at your fingertips.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="pt-3">
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
                  Remember password
                </label>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn px-4 text-light mb-2 text-center px-5  "
                  style={{ backgroundColor: "#91B3FA", borderRadius: "30px" }}
                >
                  Login
                </button>
                <ul className="list-inline px-3">
                  <li className="list-inline-item fw-lighter fs-6 text-center fst-italic">
                    Don't have an account?
                  </li>
                  <li className="list-inline-item text-decoration-underline">
                    <Link to="/signup" style={{ color: "#91B3FA" }}>
                      Sign in Now
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div
          className="box-1 mt-md-0 mt-5 rounded-end-2 p-4 div-content"
          style={{ backgroundColor: "#D5D5D5" }}
        >
          <img src={require("../images/login.png")} alt="Login" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    </body>
  );
};

export default Login;

