import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword=()=>{
    const navigate=useNavigate();
    const [error,setError]=useState("");
    const [payload, setPayload]=useState({
        email:"",
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8000/api/forgotPassword`, payload)
        .then((res) => {
            console.log(res);
            alert("Reset code sent.")
            navigate("/ResetPassword");
        })
        .catch((err) => {
            console.log(err.response.data);
            setError(err.response.data)
          });
    }

    function handleChange(event) {
        setPayload({ ...payload, [event.target.name]: event.target.value });
    }
    


    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-2/5 h-72 rounded-3xl px-20 bg-blue-400">
                <form onSubmit={handleSubmit}>
                <div className="pt-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-lg font-bold mb-2 text-white my-10"
            >
              Enter your email
            </label>
            <input
              type="email"
              className=" bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-20 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="pt-5 py-3 text-center">
              <button
                type="submit"
                className="shadow bg-white hover:bg-blue-200 py-3 mb-10 px-8 rounded-full text-blue-700"
              >
                Find
              </button>
            </div>
            
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;