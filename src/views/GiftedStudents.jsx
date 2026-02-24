import { useParams } from "react-router-dom";
import BusyStudentsInCompany from "../components/gifted-students/BusyStudentsInCompany";
import BusyStudentsInfo from "../components/gifted-students/BusyStudentsInfo";
import BusyStudentsInfo2 from "../components/gifted-students/BusyStudentsInfo2";
import BusyStudentsNum from "../components/gifted-students/BusyStudentsNum";
import GiftedStudentsCard from "../components/gifted-students/GiftedStudentsCard";
import GiftedStudentsPie from "../components/gifted-students/GiftedStudentsPie";
import { useQuery } from "react-query";
import {
  FacultyAwardsAllAwardsGender,
  FacultyAwardsCertificateCourseGender,
  FacultyAwardsCourseGenderEmp,
  FacultyAwardsEmployedStudents,
  FacultyAwardsEmployements,
  FacultyAwardsStudents,
} from "../api/api";
import { useState } from "react";

const allData = [
  { bgColor: "rgba(183, 209, 234, 0.2)", textColor: "rgba(32, 149, 212, 1)", type: false },
  { bgColor: "rgba(0, 186, 52, 0.2)", textColor: "rgba(0, 186, 52, 1)", type: false },
  { bgColor: "rgba(139, 92, 246, 0.2)", textColor: "#8B5CF6FF", type: false },
  { bgColor: "rgba(243, 94, 84, 0.2)", textColor: "rgba(243, 94, 84, 1)", type: false },
  { bgColor: "rgba(183, 209, 234, 0.2)", textColor: "rgba(32, 149, 212, 1)", type: false },
  { bgColor: "rgba(183, 209, 234, 0.2)", textColor: "rgba(32, 149, 212, 1)", type: false },
  { bgColor: "rgba(183, 209, 234, 0.2)", textColor: "rgba(32, 149, 212, 1)", type: true },
  { bgColor: "rgba(183, 209, 234, 0.2)", textColor: "rgba(32, 149, 212, 1)", type: true },
];

const GiftedStudents = () => {
  const { id } = useParams();
  const [cardData, setCardData] = useState([]);

  const { data: courseGenderEmp } = useQuery(
    ["FacultyAwardsCourseGenderEmp", id],
    () => FacultyAwardsCourseGenderEmp(id)
  );

  const { data: employedStudents } = useQuery(
    ["FacultyAwardsEmployedStudents", id],
    () => FacultyAwardsEmployedStudents(id)
  );

  const { data: employments } = useQuery(
    ["FacultyAwardsEmployements", id],
    () => FacultyAwardsEmployements(id)
  );

  const { data: allAwardsGender } = useQuery(
    ["FacultyAwardsAllAwardsGender", id],
    () => FacultyAwardsAllAwardsGender(id)
  );

  const { data: certificateCourseGender } = useQuery(
    ["FacultyAwardsCertificateCourseGender", id],
    () => FacultyAwardsCertificateCourseGender(id)
  );

  useQuery(["FacultyAwardsStudents", id], () => FacultyAwardsStudents(id), {
    onSuccess({ data }) {
      const newData = data.map((item, index) => ({
        id: item.id,
        text: item.name,
        bgColor: allData[index]?.bgColor,
        textColor: allData[index]?.textColor,
        number: item.students,
        type: item.type,
      }));
      setCardData(newData);
    },
  });

  return (
    <div className="py-16">
      {/* Responsive 1-4 columns for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cardData.map((item) => (
          <GiftedStudentsCard key={item.id} item={item} type={item.type} />
        ))}
      </div>

      {/* Responsive 1-2 columns for pies/info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        {allAwardsGender?.data && (
          <GiftedStudentsPie allAwardsGender={allAwardsGender.data} />
        )}
        <BusyStudentsInfo certificateCourseGender={certificateCourseGender?.data} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
        <BusyStudentsInfo2 courseGenderEmp={courseGenderEmp?.data} />
        <BusyStudentsNum employments={employments?.data} />
      </div>

      <BusyStudentsInCompany employedStudents={employedStudents?.data} />
    </div>
  );
};

export default GiftedStudents;