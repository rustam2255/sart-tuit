import StudentsResidenceCard from "../components/student-residence/StudentResidenceCard";
import StudentsColumn from "../components/student-residence/StudentsColumn";
import TTJStudents from "../components/student-residence/TTJStudents";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {
  DashboardAccommodationStudentAccommodation,
  DashboardAccommodationStudentGender,
} from "../api/api";
import { useState } from "react";
const allData = {
  stats: [
    {
      id: 1,
      colorBold: "#6461e1",
      colorLight: "#ececff",
    },
    {
      id: 2,
      colorBold: "#E462CD",
      colorLight: "#F8E9FB",
    },
    {
      id: 3,
      colorBold: "#D4BC20",
      colorLight: "#FBF8E9",
    },
    {
      id: 4,
      colorBold: "#66C62B",
      colorLight: "#66C62B1F",
    },
    {
      id: 5,
      colorBold: "#E462CD",
      colorLight: "#F8E9FB",
    },
  ],
  ttj: [
    {
      id: 1,
      info: "TTJ 1",
      numbers: 1067,
      colorBold: "rgba(100, 97, 225, 1)",
      colorLight: "rgba(236, 236, 255, 1)",
    },
    {
      id: 2,
      info: "TTJ 2",
      numbers: 493,
      colorBold: "#E462CD",
      colorLight: "#F8E9FB",
    },
    {
      id: 3,
      info: "TTJ 3",
      numbers: 537,
      colorBold: "#D4BC20",
      colorLight: "#FBF8E9",
    },
    {
      id: 4,
      info: "TTJ 4",
      numbers: 324,
      colorBold: "#66C62B",
      colorLight: "#66C62B1F",
    },
  ],
};

const StudentsResidence = () => {
  const [accommodationData, setAccommodationData] = useState([]);

  const { data: studentGender } = useQuery(
    ["DashboardAccommodationStudentGender"],
    DashboardAccommodationStudentGender
  );

  useQuery(
    ["DashboardAccommodationStudentAccommodation"],
    DashboardAccommodationStudentAccommodation,
    {
      onSuccess({ data }) {
        const newData = [];

        for (let i = 0; i < data.length; i++) {
          newData.push({
            id: allData.stats[i].id,
            info: data[i].name,
            numbers: data[i].students,
            colorBold: allData.stats[i].colorBold,
            colorLight: allData.stats[i].colorLight,
          });
        }

        setAccommodationData(newData);
      },
    }
  );

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb */}
      <div className="mb-6">
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
                  <i className="fa-solid fa-house text-lg mr-2"></i>
                  Asosiy
                </Link>
              ),
            },
            {
              title: "Talabalar turar joylari",
            },
          ]}
        />
      </div>

      {/* 1-Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {accommodationData.map((stat) => (
          <StudentsResidenceCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Gender Chart */}
      <div className="mb-12">
        <StudentsColumn studentGender={studentGender?.data} />
      </div>

      {/* TTJ Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {allData.ttj.map((stat) => (
          <StudentsResidenceCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Final Chart */}
      <TTJStudents />
    </div>
  );
};

export default StudentsResidence;
