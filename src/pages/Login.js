import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
function Login() {
  const [hideShow, setHideShow] = useState(false);
  const [formData, setformData] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState({});
  const handelSubmit = (e) => {
    e.prevDefault();
    
  };
  return (
    <>
      <form
        className="Flex Container "
        style={{ padding: "1.5rem" }}
        onSubmit={handelSubmit}
      >
        <div className="Login-box">
          <p className="Tagline">Login</p>
          <div className="Flex Login-input-box">
            <input
              type="email"
              className="Input-style"
              placeholder="Email"
              required
            />

            <div className="" style={{ display: "flex", width: "100%" }}>
              <input
                type={hideShow ? "text" : "password"}
                className="Input-style"
                placeholder="Password"
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
                {hideShow ? <FaRegEye size={20} /> : <BiHide size={20} />}
              </button>
            </div>

            <button className="btn" type="submit">
              Login
            </button>
            <span>
              Don't have an account?<a href="/signup">Sign up</a>
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
}

export default Login;
