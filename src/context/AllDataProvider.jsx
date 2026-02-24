import { createContext, useState } from "react";

export const AllDataContext = createContext(null);

export default function AllDataProvider({ children }) {
  const [faculties, setFaculties] = useState([]);
  const [statistic, setStatistic] = useState(null);
  return (
    <AllDataContext.Provider
      value={{
        faculties,
        setFaculties,
        statistic, 
        setStatistic
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
}
