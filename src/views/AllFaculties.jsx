import { Breadcrumb, Tabs } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentsRating from "./StudentsRating";
import GiftedStudents from "./GiftedStudents";
import FacultyTeachers from "./FacultyTeachers";
import StudentsRatingList from "./StudentsRatingList";
import Departments from "./Departments";
import { useQuery } from "react-query";
import { FacultyDepartmentsTeachersCount, GetOneFacultyStudents } from "../api/api";
import { useState } from "react";

const { TabPane } = Tabs;

const AllFaculties = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const { id } = useParams();
  const activeTab = params.get("activeTab") || "1";
  const [newTabData, setNewTabData] = useState([]);

  const onTabChange = (key) => {
    params.set("activeTab", key);
    navigate({ search: params.toString() });
  };

  useQuery(
    ["FacultyDepartmentsTeachersCount", id],
    () => FacultyDepartmentsTeachersCount(id),
    {
      onSuccess({ data }) {
        const newArr = data.map((item) => ({
          key: item.id,
          title: item.department_name,
        }));
        setNewTabData(newArr);
      },
    }
  );

  const { data: faculty } = useQuery(
    ["GetOneFacultyStudents", id],
    () => GetOneFacultyStudents(id)
  );

  const tabData = [
    { key: "1", title: "Kafedralar", content: <Departments newTabData={newTabData} /> },
    { key: "2", title: "O'qituvchilar", content: <FacultyTeachers /> },
    { key: "3", title: "TALABALAR HAQIDA MA'LUMOT", content: <StudentsRating /> },
    { key: "4", title: "Talabalar reytingi", content: <StudentsRatingList /> },
    { key: "5", title: "Iqtidorli talabalar", content: <GiftedStudents /> },
  ];

  return (
    <div className="pt-10">
      <div className="mb-5 ml-2 flex items-center gap-4">
        <Breadcrumb
          style={{
            fontSize: "17px",
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
              title: `${faculty?.data.name}`,
            },
          ]}
        />
      </div>

      <div className="overflow-x-auto lg:overflow-x-visible">
        <Tabs
          type="line"
          centered={true} 
          tabBarGutter={24}
          activeKey={activeTab}
          onChange={onTabChange}
          moreIcon={null}
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
    </div>
  );
};

export default AllFaculties;