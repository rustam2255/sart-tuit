import TotalStudentsCard from "../components/numberOfStudents/TotalStudentsCard";
import StudentCard from "../components/numberOfStudents/StudentCard";
import StudentsMapUzb from "../components/numberOfStudents/StudentsMapUzb";
import AllStudentsOfFaculties from "../components/numberOfStudents/AllStudentsOfFaculties";
import StudentsCountryChart from "../components/numberOfStudents/StudentsCountryChart";
import { Breadcrumb, Tabs } from "antd";
import { Link, useNavigate } from "react-router-dom";
import MainStudentsAll from "../components/numberOfStudents/MainStudentsAll";
import MainStudentsGrand from "../components/numberOfStudents/MainStudentsGrand";
import RegionStudentsCount from "../components/numberOfStudents/RegionStudentsCount";
import { useQuery } from "react-query";
import {
  DashboardStudent,
  DashboardStudentAbroad,
  DashboardStudentBranches,
  DashboardStudentFaculty,
  DashboardStudentLevelOfStudy,
  DashboardStudentLocationOfStudy,
  DashboardStudentPayment,
  DashboardStudentRegionsOfStudy,
} from "../api/api";
import { useEffect, useState } from "react";
import FilialStudentData from "../components/numberOfStudents/FilialStudentData";
const { TabPane } = Tabs;

const NumberOfStudents = () => {
  const navigate = useNavigate();
  const [studentCardData, setStudentCardData] = useState([]);
  const params = new URLSearchParams(location.search);
  const [filialCardData, setFilialCardData] = useState([]);

  const activeTab = params.get("activeFilial") || "1";

  const { data: dashboardStudentFaculty } = useQuery(
    ["DashboardStudentFaculty"],
    DashboardStudentFaculty
  );
  const { data: dashboardStudentLevelOfStudy } = useQuery(
    ["DashboardStudentLevelOfStudy"],
    DashboardStudentLevelOfStudy
  );
  const { data: dashboardStudentLocationOfStudy } = useQuery(
    ["DashboardStudentLocationOfStudy"],
    DashboardStudentLocationOfStudy
  );
  const { data: dashboardStudentRegionsOfStudy } = useQuery(
    ["DashboardStudentRegionsOfStudy"],
    DashboardStudentRegionsOfStudy
  );
  const { data: dashboardStudentPayment } = useQuery(
    ["DashboardStudentPayment"],
    DashboardStudentPayment
  );
  const { data: dashboardStudentAbroad } = useQuery(
    ["DashboardStudentAbroad"],
    DashboardStudentAbroad
  );
  const { data: dashboardStudents } = useQuery(
    ["DashboardStudent"],
    DashboardStudent,
    {
      onSuccess({ data }) {
        setStudentCardData([
          {
            id: "1",
            title: "KUNDUZGI TA'LIM TALABALAR SONI",
            studentsNumber: data[0].students,
            allStudents: data[4].students,
            backgroundColor: "#FFF6EB",
            textColor: "#F98600",
            borderColor: "#F9860033",
          },
          {
            id: "2",
            title: "MAGISTRATURA TALABALAR SONI",
            studentsNumber: data[2].students,
            allStudents: data[4].students,
            backgroundColor: "#F6F2FF",
            textColor: "#8B5CF6",
            borderColor: "#8B5CF633",
          },
          {
            id: "3",
            title: "SIRTQI TALABALAR SONI",
            studentsNumber: data[1].students,
            allStudents: data[4].students,
            backgroundColor: "#EBFAEF",
            textColor: "#00BA34",
            borderColor: "#00BA3433",
          },
          {
            id: "4",
            title: "MASOFAVIY TA'LIM TALABALAR SONI",
            studentsNumber: data[3].students,
            allStudents: data[4].students,
            backgroundColor: "#FEF0F0",
            textColor: "#F35E54",
            borderColor: "#F35E5433",
          },
        ]);
      },
    }
  );
  const { data: dashboardBranches } = useQuery(
    ["DashboardStudentBranches"],
    DashboardStudentBranches
  );
  useEffect(() => {
    setFilialCardData([
      {
        id: "1",
        title: "KUNDUZGI TA'LIM TALABALAR SONI",
        studentsNumber:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .internal_students,
        allStudents:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .total_students,
        backgroundColor: "#FFF6EB",
        textColor: "#F98600",
        borderColor: "#F9860033",
      },
      {
        id: "2",
        title: "MAGISTRATURA TALABALAR SONI",
        studentsNumber:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .master_students,
        allStudents:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .total_students,
        backgroundColor: "#F6F2FF",
        textColor: "#8B5CF6",
        borderColor: "#8B5CF633",
      },
      {
        id: "3",
        title: "SIRTQI TALABALAR SONI",
        studentsNumber:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .external_students,
        allStudents:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .total_students,
        backgroundColor: "#EBFAEF",
        textColor: "#00BA34",
        borderColor: "#00BA3433",
      },
      {
        id: "4",
        title: "MASOFAVIY TA'LIM TALABALAR SONI",
        studentsNumber:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .remote_students,
        allStudents:
          dashboardBranches?.data[activeTab - 1]?.branch_students[0]
            .total_students,
        backgroundColor: "#FEF0F0",
        textColor: "#F35E54",
        borderColor: "#F35E5433",
      },
    ]);
  }, [dashboardBranches, activeTab]);

  const onTabChange = (key) => {
    params.set("activeFilial", key);

    navigate({ search: params.toString() });
  };

  const tabData = [
    {
      key: "1",
      title: dashboardBranches?.data[0]?.name,
      content: (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
          <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filialCardData.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <FilialStudentData
            dashboardBranches={dashboardBranches?.data[0]?.branch_students}
          />
        </div>
      ),
    },

    {
      key: "2",
      title: dashboardBranches?.data[1]?.name,
      content: (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
          <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filialCardData.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <FilialStudentData
            dashboardBranches={dashboardBranches?.data[1]?.branch_students}
          />
        </div>
      ),
    },
    {
      key: "3",
      title: dashboardBranches?.data[2]?.name,
      content: (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
          <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filialCardData.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <FilialStudentData
            dashboardBranches={dashboardBranches?.data[2]?.branch_students}
          />
        </div>
      ),
    },
    {
      key: "4",
      title: dashboardBranches?.data[3]?.name,
      content: (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
          <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filialCardData.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <FilialStudentData
            dashboardBranches={dashboardBranches?.data[3]?.branch_students}
          />
        </div>
      ),
    },
    {
      key: "5",
      title: dashboardBranches?.data[4]?.name,
      content: (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
          <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filialCardData.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <FilialStudentData
            dashboardBranches={dashboardBranches?.data[4]?.branch_students}
          />
        </div>
      ),
    },
    {
      key: "6",
      title: dashboardBranches?.data[5]?.name,
      content: (
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
          <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filialCardData.map((studentCardItem) => (
              <StudentCard key={studentCardItem.id} {...studentCardItem} />
            ))}
          </div>
          <FilialStudentData dashboardBranches={dashboardBranches?.data} />
        </div>
      ),
    },
  ];
  return (
    <div className="py-16">
      <div className="mb-5 ml-2 flex items-center gap-4">
        <Breadcrumb
          style={{
            fontSize: "20px",
            textTransform: "uppercase",
            fontWeight: "500",
          }}
          separator={<i className="fa-solid fa-arrow-right-long"></i>}
          items={[
            {
              title: (
                <Link to="/">
                  <i className="fa-solid fa-house text-xl inline-block mr-2"></i>
                  Asosiy
                </Link>
              ),
            },
            {
              title: "Talabalar",
            },
          ]}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch w-full mx-auto">
        <div className="w-full lg:w-[62%] student-cards grid grid-cols-1 sm:grid-cols-2 gap-6">
          {studentCardData?.map((studentCardItem) => (
            <StudentCard key={studentCardItem.id} {...studentCardItem} />
          ))}
        </div>
        <TotalStudentsCard dashboardStudents={dashboardStudents?.data} />
      </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
        <MainStudentsAll
          dashboardStudentLevelOfStudy={dashboardStudentLevelOfStudy?.data}
        />
        <MainStudentsGrand
          dashboardStudentPayment={dashboardStudentPayment?.data}
        />
      </div>
      <div className="my-12">
        {dashboardStudentRegionsOfStudy && (
          <StudentsMapUzb
            dashboardStudentRegionsOfStudy={
              dashboardStudentRegionsOfStudy?.data
            }
          />
        )}
      </div>
      <RegionStudentsCount
        dashboardStudentLocationOfStudy={dashboardStudentLocationOfStudy?.data}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
        <AllStudentsOfFaculties
          dashboardStudentFaculty={dashboardStudentFaculty?.data}
        />
        <StudentsCountryChart
          dashboardStudentAbroad={dashboardStudentAbroad?.data}
        />
      </div>
      <Tabs
        type="line"
        tabBarGutter={32}
        tabBarStyle={{
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
        activeKey={activeTab}
        onChange={onTabChange}
      >
        {tabData.map((tab) => (
          <TabPane
            tab={
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {tab.title}
              </p>
            }
            key={tab.key}
          >
            {tab.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default NumberOfStudents;
