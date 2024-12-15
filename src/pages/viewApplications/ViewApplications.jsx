import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function ViewApplication() {
  const loaderData = useLoaderData();

  const handleStatusChange = (e, id) => {
    const value = e.target.value;

    const data = {
      status: value,
    };

    fetch(`http://localhost:3000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your status has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1>View application {loaderData.length} </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loaderData.map((job, index) => (
              <tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.applicant_email}</td>
                <td>{job.status}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, job._id)}
                    defaultValue="Change Status"
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
