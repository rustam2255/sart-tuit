import { Breadcrumb } from "antd";
import AcademicTeacher from "../components/teachers/AcademicTeacher";
import CivilTeachers from "../components/teachers/CivilTeachers";
import FacultyCountTeachers from "../components/teachers/FacultyCountTeachers";
import FacultyPositionTeachers from "../components/teachers/FacultyPositionTeachers";
import MaleAndFemale from "../components/teachers/MaleAndFemale";
import ManagementStaff from "../components/teachers/ManagementStaff";
import TeacherPosition from "../components/teachers/TeacherPosition";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {
  DashboardTeacherAcademicDegree,
  DashboardTeacherFaculty,
  DashboardTeacherFacultyAcademicPercentage,
  DashboardTeacherGender,
  DashboardTeacherPolitics,
  DashboardTeacherPositions,
} from "../api/api";
import { useState } from "react";

const Teachers = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const { data: teacherPosition } = useQuery(
    ["DashboardTeacherPositions"],
    DashboardTeacherPositions
  );
  const { data: teacherGender } = useQuery(
    ["DashboardTeacherGender"],
    DashboardTeacherGender
  );
  const { data: teacherAcademicDegree } = useQuery(
    ["DashboardTeacherAcademicDegree"],
    DashboardTeacherAcademicDegree
  );
  const { data: teacherPolitics } = useQuery(
    ["DashboardTeacherPolitics"],
    DashboardTeacherPolitics
  );
  useQuery(
    ["DashboardTeacherFacultyAcademicPercentage"],
    DashboardTeacherFacultyAcademicPercentage,
    {
      onSuccess({ data: data }) {
        const newPercentage = [];
        const newFaculty = [];

        for (let i = 0; i < data.length; i++) {
          newFaculty.push(data[i].faculty);
          newPercentage.push(data[i].percentage);
        }
        setPercentage(newPercentage);
        setFaculty(newFaculty);
      },
    }
  );

  useQuery(["DashboardTeacherFaculty"], DashboardTeacherFaculty, {
    onSuccess({ data: data }) {
      setFacultyData(
        data.result.map((item) => {
          return {
            name: item.faculty,
            y: item.employee_count,
          };
        })
      );
    },
  });
  return (
    <>
      <div className="py-10 sm:py-12 md:py-16">

                <div className="mb-5 ml-2 flex items-center gap-4">
          <Breadcrumb
            style={{
              fontSize: "18px",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
            separator={<i className="fa-solid fa-arrow-right-long"></i>}
            items={[
              {
                title: (
                  <Link to="/">
                    <i className="fa-solid fa-house text-lg inline-block mr-2"></i>
                    Asosiy
                  </Link>
                ),
              },
              {
                title: "O'qituvchilar",
              },
            ]}
          />
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 md:gap-6 mb-10 md:mb-12">
          <div className="lg:col-span-3">
            <TeacherPosition teacherPosition={teacherPosition?.data} />
          </div>
          <div className="lg:col-span-4">
            <AcademicTeacher teacherPosition={teacherPosition?.data} />
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          <MaleAndFemale teacherAcademicDegree={teacherAcademicDegree?.data} />
          <CivilTeachers teacherGender={teacherGender?.data} />
          <ManagementStaff teacherPolitics={teacherPolitics?.data} />
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 md:gap-6">
          <div className="lg:col-span-3">
            <FacultyCountTeachers facultyData={facultyData} />
          </div>
          <div className="lg:col-span-4">
            <FacultyPositionTeachers data={{ faculty, percentage }} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Teachers;
