import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SocialLogin() {
  const { loginWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        type="button"
        className="border w-full rounded-md py-[10px] flex justify-center items-center gap-x-2"
        onClick={handleLogin}
      >
        <FaGoogle />
        Login with Google
      </button>
    </>
  );
}

export { SocialLogin };
