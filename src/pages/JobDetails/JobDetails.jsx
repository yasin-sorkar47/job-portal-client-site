import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const loaderData = useLoaderData();

  const job = loaderData;

  return (
    <div className=" min-h-screen mt-11">
      <div className="max-w-4xl mx-auto my-8 bg-white shadow-lg rounded-lg p-6">
        {/* Company Info */}
        <div className="flex items-center mb-6">
          <img
            src={job.company_logo}
            alt="Favorite IT Logo"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.company}</p>
          </div>
        </div>

        {/* Job Overview */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Job Overview</h2>
          <ul className="mt-2 text-gray-700">
            <li>
              <strong>Location:</strong> {job.location}
            </li>
            <li>
              <strong>Job Type:</strong> {job.jobType}
            </li>
            <li>
              <strong>Category:</strong> {job.category}
            </li>
            <li>
              <strong>Application Deadline:</strong> {job.applicationDeadline}
            </li>
            <li>
              <strong>Salary:</strong>{" "}
              {`${job.salaryRange.min} - ${
                job.salaryRange.max
              } ${job.salaryRange.currency.toUpperCase()}`}
            </li>
          </ul>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Job Description</h2>
          <p className="mt-2 text-gray-700">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Requirements</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Responsibilities</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            {job.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Contact Information
          </h2>
          <p className="mt-2 text-gray-700">
            <strong>HR Name:</strong> {job.hr_name}
          </p>
          <p className="text-gray-700">
            <strong>HR Email:</strong>{" "}
            <a
              href={`mailto:${job.hr_email}`}
              className="text-blue-600 hover:underline"
            >
              {job.hr_email}
            </a>
          </p>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <Link
            to={`/jobApply/${job._id}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
