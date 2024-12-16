import axios from "axios";
import Lottie from "lottie-react";
import { useLocation, useNavigate } from "react-router-dom";
import home from "../assets/lottiefiles/home.json";
import loginAnimation from "../assets/lottiefiles/login.json";
import { SocialLogin } from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const term = e.target.term.checked;

    // login user
    loginUser(email, password)
      .then((result) => {
        const user = { email: result.user.email };
        axios
          .post("http://localhost:3000/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
          });
        // navigate(from);
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
            <p className="text-green-300 text-sm">Welcome back!</p>
            <h1 className="text-2xl font-bold">Member Login</h1>
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
                <span className="label-text">Username or Email address *</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label cursor-pointer ">
                <div className="flex items-center">
                  <input
                    name="term"
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text ml-3">Remember me</span>
                </div>
                <button type="button" className="text-sm">
                  Forget Password
                </button>
              </label>
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
