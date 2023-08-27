import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword=()=>{
    const navigate=useNavigate();
    const [token,setToken]=useState("")
    const [payload, setPayload]=useState({
        password:"",
        confirmPassword:"",
        passwordResetToken:"",
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.patch(`http://localhost:8000/api/resetPassword/${token}`, payload)
        .then((res) => {
            console.log(res);
            navigate("/login");
            console.log(payload)
        })
        .catch((err) => {
            console.log(err);
          });
    }

    function handleChange(event) {
        setPayload({ ...payload, [event.target.name]: event.target.value });
    }

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-2/5 h-4/5 rounded-3xl px-20 bg-blue-400">
                <div className="text-white pt-3 text-md font-light text-center">
                    You have been sent a recovery key for your account.
                </div>
                <form onSubmit={handleSubmit}>
                <div>
            <label
              htmlFor="passwordResetToken"
              className="block uppercase tracking-wide text-lg font-bold mb-2 text-white my-5"
            >
              Enter the recovery key
            </label>
            <textarea
              type="text"
              className=" bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-20 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="passwordResetToken"
              name="passwordResetToken"
              onChange={(e)=>setToken(e.target.value)}
              required
            />
          </div>
                <div>
            <label
              htmlFor="password"
              className="block uppercase tracking-wide text-lg font-bold mb-2 text-white my-5"
            >
              New Password
            </label>
            <input
              type="password"
              className=" bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-20 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block uppercase tracking-wide text-lg font-bold mb-2 text-white my-10"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              className=" bg-gray-100 text-gray-700 border border-gray-500 rounded py-3 px-20 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
          </div>
          <div className="pt-5 py-3 text-center">
              <button
                type="submit"
                className="shadow bg-white hover:bg-blue-200 py-3 mb-10 px-8 rounded-full text-blue-700"
              >
                Submit
              </button>
            </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;