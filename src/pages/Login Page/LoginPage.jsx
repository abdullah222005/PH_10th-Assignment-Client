import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../Auth/AuthContext";
import axios from "axios";

const LoginPage = () => {
  const { loginWithGoogle, loginWithEP } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginWithEP(email, password)
      .then((rs) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login Successful");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((rs) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Login Successful");
        const newUser = {
          name: rs.user.displayName,
          email: rs.user.email,
          image: rs.user.photoURL,
        };
        axios
          .post(
            "https://the-book-heaven-server-omega.vercel.app/users",
            newUser
          )
          .then((data) => {
            console.log("data after user save", data);
            navigate(`${location.state ? location.state : "/"}`);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-sapphire-night py-11">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto my-5 md:my-10 lg:my-15">
        <title>Login - The Book Heaven</title>
        <div className="card-body p-11">
          <h1 className="text-3xl text-center pb-5 font-semibold">
            Login your account
          </h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label font-semibold text-secondary">Email</label>
            <input
              required
              type="email"
              className="input w-full"
              placeholder="Enter your email here"
              name="email"
              ref={emailRef}
            />
            <label className="label font-semibold text-secondary">
              Password
            </label>
            <input
              required
              type="password"
              className="input w-full"
              placeholder="Enter your password here"
              name="password"
            />
            <div>
              <Link to="/passwordRest" className="link link-hover text-primary">
                Forgot password?
              </Link>
            </div>
            {error && (
              <p className="text-red-500 font-semibold mt-1">{error}</p>
            )}
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </form>
          <p className="py-3 mx-auto text-center">
            Don't Have An Account?{" "}
            <Link
              to="/auth/Register"
              className="link link-hover text-[#ff5520] hover:text-secondary font-bold"
            >
              Register
            </Link>
            <br />
            Or,
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-accent text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
