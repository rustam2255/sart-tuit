import { useParams } from "react-router-dom";
import AllCoursesStudents from "../components/students-rating/AllCoursesStudents";
import BoyAndGirlRating from "../components/students-rating/BoyAndGirlRating";
import CourseOfStudents from "../components/students-rating/CourseOfStudents";
import FormOfPaymentRating from "../components/students-rating/FormOfPaymentRating";
import MapRating from "../components/students-rating/MapRating";
import RatingSocialStatus from "../components/students-rating/RatingSocialStatus";
import RegionStudents from "../components/students-rating/RegionStudents";
// import StudentsCountCard from "../components/students-rating/StudentsCountCard";
import StudentsCountry from "../components/students-rating/StudentsCountry";
import StudentsNation from "../components/students-rating/StudentsNation";
import StudentsRatingCard from "../components/students-rating/StudentsRatingCard";
import StudentsResidenceBar from "../components/students-rating/StudentsResidenceBar";
import StudentTotalChart from "../components/students-rating/StudentTotalChart";
import { useQuery } from "react-query";
import {
  GetOneFacultyStudents,
  GetOneFacultyStudentsCitizenship,
  GetOneFacultyStudentsAddention,
  GetOneFacultyStudentsCourseGender,
  GetOneFacultyStudentsCourseGroups,
  GetOneFacultyStudentsCoursePayment,
  // GetOneFacultyStudentsEducationType,
  GetOneFacultyStudentsForeignLocal,
  GetOneFacultyStudentsRegionCourse,
  GetOneFacultyStudentsRegionGenderCount,
  GetOneFacultyStudentsSocialStatus,
  GetOneFacultyStudentsAccommodation,
} from "../api/api";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { FacultyContext } from "../context/FacultyProvider";

const StudentsRating = () => {
  const { id } = useParams();
  const { setStudentsData, setCoursePaymentData } = useContext(FacultyContext);
  const [studentsAddentionData, setStudentsAddentionData] = useState([]);

  useQuery(
    ["GetOneFacultyStudents", id],
    () => GetOneFacultyStudents(id),
    {
      enabled: !!id,
      onSuccess(data) {
        setStudentsData(data.data);
      },
    },
  );

  const { data: courseGenderStudentsData } = useQuery(
    ["GetOneFacultyStudentsCourseGender", id],
    () => GetOneFacultyStudentsCourseGender(id),
    { enabled: !!id }
  );

  const { data: courseGropsData } = useQuery(
    ["GetOneFacultyStudentsCourseGroups", id],
    () => GetOneFacultyStudentsCourseGroups(id),
    { enabled: !!id }
  );

  useQuery(
    ["GetOneFacultyStudentsCoursePayment", id],
    () => GetOneFacultyStudentsCoursePayment(id),
    {
      enabled: !!id,
      onSuccess(data) {
        setCoursePaymentData(data.data);
      },
    }
  );

  const { data: foreignLocalData } = useQuery(
    ["GetOneFacultyStudentsForeignLocal", id],
    () => GetOneFacultyStudentsForeignLocal(id),
    { enabled: !!id }
  );

  const { data: regionCourseData } = useQuery(
    ["GetOneFacultyStudentsRegionCourse", id],
    () => GetOneFacultyStudentsRegionCourse(id),
    { enabled: !!id }
  );

  const { data: regionGenderCountData } = useQuery(
    ["GetOneFacultyStudentsRegionGenderCount", id],
    () => GetOneFacultyStudentsRegionGenderCount(id),
    { enabled: !!id }
  );

  const { data: citizentshipData } = useQuery(
    ["GetOneFacultyStudentsCitizenship", id],
    () => GetOneFacultyStudentsCitizenship(id),
    { enabled: !!id }
  );

  const { data: socialStatusData } = useQuery(
    ["GetOneFacultyStudentsSocialStatus", id],
    () => GetOneFacultyStudentsSocialStatus(id),
    { enabled: !!id }
  );

  const { data: accommodation } = useQuery(
    ["GetOneFacultyStudentsAccommodation", id],
    () => GetOneFacultyStudentsAccommodation(id),
    { enabled: !!id }
  );

  const processStudentsAddention = useCallback((data) => {
    return [
      { id: 1, name: "KURSDAN QOLGAN TALABALAR", count: data.dropout, color: "rgba(32, 149, 212, 1)" },
      { id: 2, name: "AKADEMIK TA'TIL OLGANLAR", count: data.academic_holiday, color: "rgba(249, 134, 0, 1)" },
      { id: 3, name: "AKADEMIK MOBILLIK DAVRIDAGILAR", count: data.academic_mobility, color: "rgba(0, 186, 52, 1)" },
      { id: 4, name: "CHETLASHTIRILGAN TALABALAR", count: data.left, color: "rgba(243, 94, 84, 1)" },
    ];
  }, []);

  useQuery(
    ["GetOneFacultyStudentsAddention", id],
    () => GetOneFacultyStudentsAddention(id),
    {
      enabled: !!id,
      onSuccess({ data }) {
        setStudentsAddentionData(processStudentsAddention(data));
      },
    },
  );

  return (
    <div className="py-8  md:py-16 ">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="col-span-1 sm:col-span-1 lg:col-span-2">
          <StudentTotalChart />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-2">
          <FormOfPaymentRating />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <BoyAndGirlRating />
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <AllCoursesStudents courseGropsData={courseGropsData?.data} />
        <CourseOfStudents courseGenderStudentsData={courseGenderStudentsData?.data} />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {studentsAddentionData.map((item) => (
          <StudentsRatingCard key={item.id} item={item} />
        ))}
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <StudentsResidenceBar accommodation={accommodation?.data} />
        <RatingSocialStatus socialStatusData={socialStatusData?.data} />
      </div>

      
      {regionGenderCountData && (
        <div className="mt-12">
          <MapRating regionGenderCountData={regionGenderCountData.data} />
        </div>
      )}

      <div className="mt-12">
        <RegionStudents regionCourseData={regionCourseData?.data} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <StudentsNation foreignLocalData={foreignLocalData?.data} />
        <StudentsCountry citizentshipData={citizentshipData?.data} />
      </div>
    </div>
  );
};



export default StudentsRating;
