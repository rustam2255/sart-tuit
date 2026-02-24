import FacultyTeachersCard from "../components/faculty-teachers/FacultyTeachersCard";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import FacultyPieChart from "../components/faculty-teachers/FacultyPieChart";
import FacultyBarChart from "../components/faculty-teachers/FacultyBarChart";
import FacultyColumnChart from "../components/faculty-teachers/FacultyColumnChart";
import AverageAgeTeachers from "../components/faculty-teachers/AverageAgeTeachers";
import FacultyTeacherPosition from "../components/faculty-teachers/FacultyTeacherPosition";
import CertificateOfTeachers from "../components/faculty-teachers/CertificateOfTeachers";
import {
  FacultyTeacherAcademicDegree,
  FacultyTeacherAcademicPercentage,
  FacultyTeacherAverageAge,
  FacultyTeacherCount,
  FacultyTeacherDepartmentCertificates,
  FacultyTeacherDepartmentContingent,
  FacultyTeacherDepartmentGender,
  FacultyTeacherGender,
  FacultyTeacherPositions,
} from "../api/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const FacultyTeachers = () => {
  const { id } = useParams();
  const { data: academicDegree } = useQuery(
    ["FacultyTeacherAcademicDegree", id],
    () => FacultyTeacherAcademicDegree(id)
  );
  const { data: academicPercentage } = useQuery(
    ["FacultyTeacherAcademicPercentage", id],
    () => FacultyTeacherAcademicPercentage(id)
  );
  const { data: count } = useQuery(
    ["FacultyTeacherCount", id],
    () => FacultyTeacherCount(id)
  );
  const { data: averageAge } = useQuery(
    ["FacultyTeacherAverageAge", id],
    () => FacultyTeacherAverageAge(id)
  );
  const { data: gender } = useQuery(
    ["FacultyTeacherGender", id],
    () => FacultyTeacherGender(id)
  );
  const { data: departmentContingent } = useQuery(
    ["FacultyTeacherDepartmentContingent", id],
    () => FacultyTeacherDepartmentContingent(id)
  );
  const { data: departmentGender } = useQuery(
    ["FacultyTeacherDepartmentGender", id],
    () => FacultyTeacherDepartmentGender(id)
  );
  const { data: positions } = useQuery(
    ["FacultyTeacherPositions", id],
    () => FacultyTeacherPositions(id)
  );
  const { data: departmentCertificates } = useQuery(
    ["FacultyTeacherDepartmentCertificates", id],
    () => FacultyTeacherDepartmentCertificates(id)
  );



  const cardData = [
    {
      id: 1,
      bgColor: "rgba(233, 246, 232, 1)",
      textColor: "rgba(0, 186, 52, 1)",
      number: `${count?.data.internal} nafar`,
      text: "Asosiy shtatdagi professor-o‘qituvchilar soni",
      img: i1,
    },
    {
      id: 2,
      bgColor: "rgba(1, 103, 187, 0.13)",
      textColor: "rgba(1, 103, 187, 1)",
      number: `${academicPercentage?.data.internal.percentage}%`,
      text: "Asosiy shtatdagi professor-o‘qituvchilar ilmiy salohiyati",
      img: i2,
    },
    {
      id: 3,
      bgColor: "rgba(233, 246, 232, 1)",
      textColor: "rgba(0, 186, 52, 1)",
      number: `${averageAge?.data.toFixed(0)}`,
      text: "O'rtacha yosh",
      img: i3,
    },
    {
      id: 4,
      bgColor: "rgba(1, 103, 187, 0.13)",
      textColor: "rgba(1, 103, 187, 1)",
      number: `${gender?.data.male_count} / ${gender?.data.female_count}`,
      text: "Erkak/Ayol o'qituvchilar soni",
      img: i4,
    },
  ];
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {cardData.map((item) => {
          return <FacultyTeachersCard key={item.id} item={item} />
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-12">
        <div className="lg:col-span-3">
          <FacultyBarChart positions={positions?.data} />
        </div>
        <div className="lg:col-span-4">
          <FacultyTeacherPosition positions={positions?.data} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-12">
        <div className="lg:col-span-3">
          <FacultyBarChart positions={positions?.data} />
        </div>
        <div className="lg:col-span-4">
          <FacultyTeacherPosition positions={positions?.data} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FacultyColumnChart departmentContingent={departmentContingent?.data} />
        <AverageAgeTeachers departmentGender={departmentGender?.data} />
      </div>
    </div>
  );
};

export default FacultyTeachers;
