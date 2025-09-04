import { createContext, useState } from "react";

export const jobContext = createContext();

// Define jobs data outside the component to prevent recreation on every render
const initialJobs = [
  {
    title: "Backend Python Developer",
    location: "Remote",
    type: "Full-time",
    summary:
      "A backend Python developer architects and builds the server-side logic, APIs, and data systems that power applications. They ensure scalability, performance, and reliability to handle growing user loads and data. Their code forms the core engine that the front-end and other services rely upon.",
  },
  {
    title: "Backend Node js Developer",
    location: "On-site",
    type: "Part-time",
    summary:
      "A backend  developer  builds the server-side logic, APIs, and data systems that power applications. They ensure scalability, performance, and reliability to handle growing user loads and data. Their code forms the core engine that the front-end and other services rely upon.",
  },
  {
    title: "UI designer",
    location: "Remote",
    type: "Part-time",
    summary:
      "UI Designer role focused on creating the visual and interactive elements of digital products. The position involves designing user interfaces that are both aesthetically pleasing and functionally intuitive to ensure a superior user experience.",
  },
  {
    title: "Data Engineer",
    location: "Remote",
    type: "Full-time",
    summary:
      "Designs, builds, and maintains scalable data pipelines and infrastructure to support data analytics and machine learning initiatives. Ensures data is accessible, reliable, and efficiently processed for business intelligence.",
  },
];

export const ContextProvider = ({ children }) => {
  const [jobs, setjobs] = useState(initialJobs);

  const showJob = () => {
    return jobs;
  };

  const addNewJob = (newJob) => {
    setjobs((prev) => [...prev, newJob]);
  };

  const value = {
    showJob,
    addNewJob,
  };
  return <jobContext.Provider value={value}>{children}</jobContext.Provider>;
};
