import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default function useAxios() {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          console.log("this is cot");
          logOutUser()
            .then(() => {
              console.log("logout for wrong interop");
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
            });
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
}
