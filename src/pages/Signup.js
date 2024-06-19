import React, { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiHide } from "react-icons/bi";
const Signup = () => {
  const [hideShow, setHideShow] = useState(false);

  return (
    <>
      <form className="Flex Container " style={{ padding: "1.5rem" }}>
        <div className="Login-box">
          <p className="Tagline">Signup</p>
          <div className="Flex Login-input-box">
            <div className="grid-columns">
              <input
                type="text"
                className="Input-style"
                placeholder="FirstName"
                required
              />
              <input
                type="text"
                className="Input-style"
                placeholder="LastName"
                required
              />
              <input
                type="number"
                
                className="Input-style starched-ele"
                placeholder="MobileNumber"
                required
              />
              <input
                type="email"
                className="Input-style starched-ele"
                placeholder="Email"
              />
              <input
                type="password"
                className="Input-style full-width-input"
                placeholder="Create password"
                required
              />

              <div className="" style={{ display: "flex", width: "100%" }}>
                <input
                  type={hideShow ? "text" : "password"}
                  className="Input-style "
                  placeholder="Confirm password"
                  style={{ flex: "1", borderRadius: "1rem  0rem 0rem 1rem" }}
                  required
                />
                <button
                  type="button"
                  style={{
                    outline: "none",
                    border: "none",
                    borderRadius: "0rem 1rem 1rem 0",
                    padding: "1rem",
                  }}
                  onClick={() => setHideShow(!hideShow)}
                >
                  <BiHide size={20} />
                </button>
              </div>
            </div>

            <button className="btn" type="submit">
              Signup
            </button>
            <span>
              Have your ready logged in?<a href="/">Login</a>
            </span>
            <span
              className="Flex-center"
              style={{ width: "100%", gap: "1rem" }}
            >
              <hr width="50%" size="2" />
              Or
              <hr width="50%" size="2" />
            </span>
            <button className="Facebook-btn">
              <FaFacebook size={30} />
              <p className="facebook-text">Login With Facebook</p>
            </button>
            <button className="Google-btn">
              <FcGoogle size={30} />
              <p className="facebook-text">Login With Google</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
