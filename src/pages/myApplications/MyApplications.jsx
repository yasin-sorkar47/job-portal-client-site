import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function MyApplications() {
  const [myApplications, setMyApplications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    // fetch(`http://localhost:3000/job-application?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMyApplications(data);
    //   });

    axios
      .get(`http://localhost:3000/job-application?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyApplications(res.data);
      });
  }, [user?.email]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Job Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myApplications.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.category}</td>
                <td>
                  <Link
                    to={`/jobDetails/${job.job_id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </Link>
                </td>
                <td>
                  <button className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
