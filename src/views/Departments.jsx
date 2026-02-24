import { Tabs } from "antd";
import ColumnDepart from "../components/departments/ColumnDepart";
import ForegnTeacherDepart from "../components/departments/ForegnTeacherDepart";
import TeacherCountDepart from "../components/departments/TeacherCountDepart";
import { useNavigate, useParams } from "react-router-dom";
import DepartmentTab from "../components/departments/DepartmentTab";
import DepartNameCard from "../components/departments/DepartNameCard";
import { useQuery } from "react-query";
import {
  FacultyDepartmentsAddentionalInfo,
  FacultyDepartmentsLabaratories,
  FacultyDepartmentsTeacherPositions,
  FacultyDepartmentsTeachersCount,
  FacultyDepartmentsTeachersEmploymentForm,
  FacultyDepartmentsTeachersGenders,
  FacultyTeacherDepartmentAcademicPercentage,
  FacultyTeacherDepartmentGlobal,
} from "../api/api";
import { useEffect, useState } from "react";
const { TabPane } = Tabs;
const colors = [
  {
    id: 1,
    bg: "#E8FCE8",
    color: "#48C048",
  },
  {
    id: 2,
    bg: "#f3cafd",
    color: "#A105C4",
  },
  {
    id: 3,
    bg: "#2469FF1A",
    color: "#2469FF",
  },
  {
    id: 4,
    bg: "#FFA1341A",
    color: "#FFA134",
  },
  {
    id: 5,
    bg: "#FF34DB1A",
    color: "#FF34DB",
  },
  {
    id: 6,
    bg: "#E5FBFF",
    color: "#48C0FF",
  },
  {
    id: 7,
    bg: "#FFECEC",
    color: "#FF4848",
  },
];
const Departments = ({ newTabData }) => {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [facultyData, setFacultyData] = useState([]);
  const { id } = useParams();
  const activeTab =
    params.get("department") || String(newTabData[0]?.key || "1");
  const [tabData, setTabData] = useState([]);
  const onTabChange = (key) => {
    params.set("department", key);
    navigate({ search: params.toString() });
  };

  const { data: departmentLocale } = useQuery(
    ["FacultyDepartmentsTeachersCount", id],
    () => FacultyDepartmentsTeachersCount(id),
    {
      onSuccess({ data: data }) {
        const newData = [];
        for (let i = 0; i < data?.length; i++) {
          let newObj = {
            id: colors[i].id,
            name: data[i]?.department_name,
            number: data[i]?.teachers_count,
            bg: colors[i].bg,
            color: colors[i].color,
          };
          newData.push(newObj);
        }
        setFacultyData(newData);
      },
    }
  );
  const { data: departmentGlobal } = useQuery(
    ["FacultyTeacherDepartmentGlobal", id],
    () => FacultyTeacherDepartmentGlobal(id)
  );
  const { data: departmentAcademicPercentage } = useQuery(
    ["FacultyTeacherDepartmentAcademicPercentage", id],
    () => FacultyTeacherDepartmentAcademicPercentage(id)
  );
  const { data: addentionalInfo } = useQuery(
    ["FacultyDepartmentsAddentionalInfo", activeTab],
    () => FacultyDepartmentsAddentionalInfo(activeTab)
  );
  const { data: teacherPositions } = useQuery(
    ["FacultyDepartmentsTeacherPositions", activeTab],
    () => FacultyDepartmentsTeacherPositions(activeTab)
  );
  const { data: labaratories } = useQuery(
    ["FacultyDepartmentsLabaratories", activeTab],
    () => FacultyDepartmentsLabaratories(activeTab)
  );
  const { data: teachersEmploymentForm } = useQuery(
    ["FacultyDepartmentsTeachersEmploymentForm", activeTab],
    () => FacultyDepartmentsTeachersEmploymentForm(activeTab)
  );
  const { data: teachersEmploymentGenders } = useQuery(
    ["FacultyDepartmentsTeachersGenders", activeTab],
    () => FacultyDepartmentsTeachersGenders(activeTab)
  );
  // const { data: teachersCount } = useQuery(
  //   ["FacultyDepartmentsTeachersCount1", 1],
  //   () => FacultyDepartmentsTeachersCount1(1)
  // );

  useEffect(() => {
    const updatedTabData = newTabData.map((tab) => ({
      ...tab,
      content: (
        <DepartmentTab
          teachersEmploymentGenders={teachersEmploymentGenders?.data}
          teachersEmploymentForm={teachersEmploymentForm?.data}
          addentionalInfo={addentionalInfo?.data}
          labaratories={labaratories?.data}
          teacherPositions={teacherPositions?.data}
        />
      ),
    }));
    setTabData(updatedTabData);
  }, [
    newTabData,
    teachersEmploymentGenders?.data,
    teachersEmploymentForm?.data,
    addentionalInfo?.data,
    labaratories?.data,
    teacherPositions?.data,
  ]);

  return (
    <div className="py-16">
      <div className="grid grid-cols-2 gap-6 ">
        <TeacherCountDepart departmentLocale={departmentLocale?.data} />
        <ForegnTeacherDepart departmentGlobal={departmentGlobal?.data} />
      </div>
      <ColumnDepart
        departmentAcademicPercentage={departmentAcademicPercentage?.data}
      />

      <h1 className="text-2xl font-semibold mt-12 mb-5 text-center">
        Fakultetdagi asosiy shtatdagi professor-o‘qituvchilar soni: {facultyData?.reduce(
          (sum, item) => sum + item.number,
          0
        )} nafar
      </h1>
      <div className="flex gap-6 mb-12 justify-center">
        {facultyData.map((item) => {
          return <DepartNameCard key={item.id} item={item} />;
        })}
      </div>
      <Tabs
        type="line"
        tabBarGutter={50}
        tabBarStyle={{
          // display: "flex",
          // justifyContent: "space-around",
          // flex: "1",
          width: "100%",
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

export default Departments;