import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

export default function AddJobs() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJobs = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialFormData = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = initialFormData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been added",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto text-center my-8">
      <h2 className="text-4xl font-bold">Add Jobs</h2>
      <div className="max-w-[700px] mx-auto">
        <form onSubmit={handleAddJobs} className="card-body">
          {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered"
              required
            />
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="jobType"
              defaultValue={"Pick one"}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Full-Time</option>
              <option>Hybrid</option>
              <option>Intern</option>
              <option>Remote</option>
            </select>
          </div>
          {/* job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              name="category"
              defaultValue={"Pick one"}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
          {/* job applicationDeadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Application Deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Job Application Deadline"
              className="input input-bordered "
              required
            />
          </div>

          {/* salary range */}
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            <div className="form-control">
              <input
                type="number"
                name="min"
                placeholder="min"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="max"
                placeholder="Max"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select
                name="currency"
                defaultValue={"Currency"}
                className="select select-bordered"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>

          {/* job Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>

            <textarea
              name="description"
              placeholder="Job Description"
              required
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>

          {/* Company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* job Requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>

            <textarea
              name="requirements"
              placeholder="write ech requirement in new line"
              required
              rows={3}
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          {/* job responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>

            <textarea
              name="responsibilities"
              placeholder="write ech responsibilities in new line"
              required
              rows={3}
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>

          {/* HR name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR_Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR_Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR_Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              name="hr_email"
              placeholder="HR_Email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Company logo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* submit button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
