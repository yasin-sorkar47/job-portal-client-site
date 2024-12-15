import Lottie from "lottie-react";
import { useState } from "react";
import home from "../assets/lottiefiles/home.json";
import loginAnimation from "../assets/lottiefiles/login.json";
import { SocialLogin } from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const [error, setError] = useState("");
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;
    const term = form.term.checked;

    if (password.length < 6) {
      setError("password must be 6 character");
      return;
    }

    if (password !== rePassword) {
      setError("password do not match");
      return;
    }

    if (!term) {
      setError("please accept the term & condition");
      return;
    }

    const obj = {
      name,
      email,
      username,
      password,
      rePassword,
    };

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row items-center mt-28">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div className="text-center">
            <p className="text-green-300 text-sm">Register</p>
            <h1 className="text-2xl font-bold">Start for free Today</h1>
            <p className="text-base ">
              Access to all features. No credit card required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-body">
            <div>
              <SocialLogin />
            </div>
            <div className="divider">Or continue with</div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name *</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username *</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Re-Password</span>
              </label>
              <input
                type="password"
                name="rePassword"
                placeholder="Re-password"
                className="input input-bordered"
                required
              />

              {error && <p className="text-red-600">{error}</p>}

              <div className="form-control">
                <label className="label cursor-pointer ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="term"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text ml-3">
                      Agree our terms and policy
                    </span>
                  </div>
                  <button type="button" className="text-sm">
                    Learn more...
                  </button>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
      <div className="max-w-[700px]">
        <Lottie animationData={home} />
      </div>
    </div>
  );
}
