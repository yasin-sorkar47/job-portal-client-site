import { Link } from "react-router-dom";

export default function HotCard({ job }) {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    company_logo,
    _id,
  } = job;

  return (
    <div className=" bg-white shadow-lg rounded-lg p-6 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <span className="text-green-500 text-xl font-bold">⚡</span>
      </div>
      <h2 className="mt-4 text-xl font-bold text-gray-800">{category}</h2>
      <div className="flex items-center text-gray-500 mt-1">
        <span className="text-sm bg-gray-100 rounded-full px-3 py-1 mr-2">
          {jobType}
        </span>
        <span className="text-sm">{applicationDeadline}</span>
      </div>
      <p className="mt-3 text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {requirements.map((requirement, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-sm text-gray-700 rounded-md"
          >
            {requirement}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-col ">
        <span className="text-base   ">
          salary: {salaryRange.min}-{salaryRange.max} bd
        </span>
        <Link
          to={`/jobDetails/${_id}`}
          className="bg-blue-600 text-center  mt-5 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
