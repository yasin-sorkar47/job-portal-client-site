import { useEffect, useState } from "react";
import HotCard from "./HotCard";

export default function HotJobs() {
  const [hotJobs, setHotJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setHotJobs(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotJobs.map((job) => (
          <HotCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}
