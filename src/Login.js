import React from "react";
import "./Login.css";
import { GrTwitter, GrApple } from "react-icons/gr";

import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="login-container">
        {/* Left Side */}

        <div className="login-left">
          <p style={{ fontSize: "70px", fontWeight: "bold" ,color:"white",background:"black" }}>
            tweetNow ....
          </p>
          <GrTwitter />
        </div>

        {/* Right Side */}

        <div className="login-right">
          <div className="login-right-twitter-logo">
            <GrTwitter />
          </div>
          <h1 className="login-h1">Happening now</h1>
          <h2 className="login-h2">Join Twitter today</h2>

         

          <Link to="/signup-phone">
            <div
              className="phone"
            >
              <button>Sign up with phone or email</button>
            </div>
          </Link>
          <p
            style={{
              width: "300px",
              fontSize: "12px",
              marginTop: "10px",
              color: "#AAB8C2",
            }}
          >
            By signing up, you agree to the{" "}
            <span className="tc">Terms of Service</span> and{" "}
            <span className="tc">Privacy Policy</span>, including{" "}
            <span className="tc">Cookie Use.</span>
          </p>
          <div className="signup-login">
            <p>Already have an account? </p>
            <Link to={"/signin"}>
              <div className="signin-btn">
                <button>Log In</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
