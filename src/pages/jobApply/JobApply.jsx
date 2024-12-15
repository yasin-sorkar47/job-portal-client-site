import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

export default function JobApply() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const applyObj = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applyObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          navigate("/myApplications");
        }
      });
  };

  return (
    <div className="max-w-[700px] mx-auto my-24">
      <h1 className="text-2xl font-bold text-center mt-6">Job Application</h1>
      <form onSubmit={handleApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin URL</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="Linkedin URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
}
