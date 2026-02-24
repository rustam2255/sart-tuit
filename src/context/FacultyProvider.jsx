import { createContext, useState } from "react";

export const FacultyContext = createContext(null);

export default function FacultyProvider({ children }) {
  const [studentsData, setStudentsData] = useState([]);
  const [coursePaymentData, setCoursePaymentData] = useState(null);
  
  const [statistic, setStatistic] = useState(null);
  return (
    <FacultyContext.Provider
      value={{
        studentsData,
        setStudentsData,
        statistic,
        setStatistic,
        coursePaymentData, 
        setCoursePaymentData
      }}
    >
      {children}
    </FacultyContext.Provider>
  );
}
