import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext";

const RegisterPage = () => {
  const { createUserWithEP, setUser, user, updateUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  
    if (name.length < 4) {
      setError("Name can't be less than 4 alphabet.");
      return;
    } else {
      setError("");
    }
    if(!passwordRegex.test(password)){
      setError("Must need a uppercarse, a lowercase & minimum 6 characters.")
      return;
    }else{
      setError("")
    }

    createUserWithEP(email, password)
      .then((rs) => {
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            const newUser = {
              name: rs.user.displayName,
              email: rs.user.email,
              image: rs.user.photoURL,
            };
            fetch("http://localhost:1111/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("data after user save", data);
              });
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-sapphire-night py-11">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto my-5 md:my-10 lg:my-15">
        <title>Register - Book Heaven</title>
        <div className="card-body p-11">
          <h1 className="text-3xl text-center pb-5 font-semibold">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label font-semibold text-secondary">Name</label>
            <input
              required
              type="text"
              className="input w-full"
              placeholder="Enter your name here"
              name="name"
            />
            <label className="label font-semibold text-secondary">
              Photo URL
            </label>
            <input
              required
              type="url"
              className="input w-full"
              placeholder="Enter your photo url here"
              name="photoURL"
            />
            <label className="label font-semibold text-secondary">Email</label>
            <input
              required
              type="email"
              className="input w-full"
              placeholder="Enter your email here"
              name="email"
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
            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="checkbox checkbox-sm"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="link text-[#ff5520] hover:text-secondary font-semibold"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            <button type="submit" className="btn bg-[#0A192F] mt-4">
              Register
            </button>
          </form>
          <p className="py-3 mx-auto">
            Already Have An Account?{" "}
            <Link
              to="/auth/Login"
              className="link link-hover text-[#ff5520] hover:text-secondary font-bold"
            >
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
