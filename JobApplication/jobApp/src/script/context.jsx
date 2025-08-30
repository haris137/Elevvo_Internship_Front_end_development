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
    title: "Backend Python Developer",
    location: "Remote",
    type: "Full-time",
    summary:
      "A backend Python developer architects and builds the server-side logic, APIs, and data systems that power applications. They ensure scalability, performance, and reliability to handle growing user loads and data. Their code forms the core engine that the front-end and other services rely upon.",
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
