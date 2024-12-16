import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("user log out");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/myApplications"}>My Application</Link>
      </li>
      <li>
        <Link to={"/addJobs"}>Add Jobs</Link>
      </li>
      <li>
        <Link to={"/myPostedJobs"}>My Posted Jobs</Link>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">JOB PORTAL</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-x-3">
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-success">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link className="btn " to={"/register"}>
                Register
              </Link>

              <Link className="btn" to={"/login"}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
