import StudentsListCard from "../components/students-list/StudentsListCard";
import { Avatar, Breadcrumb, Empty, Table } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { FacultyAwardsAward } from "../api/api";
import { useQuery } from "react-query";
import { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
    align: "center",
  },
  {
    title: "TALABALANING ISM, FAMILIYA, OTASINING ISMI",
    dataIndex: "full_name",
    key: "full_name",
  },
  {
    title: "FAKULTET NOMI",
    dataIndex: "speciality_name",
    key: "speciality_name",
  },
  {
    title: "GURUHI",
    dataIndex: "group_name",
    key: "group_name",
    align: "center",
  },
  // {
  //   title: "SERTIFIKAT",
  //   dataIndex: "sertificate",
  //   key: "sertificate",
  //   align: "center",
  // },
  {
    title: "RASMI",
    dataIndex: "image",
    key: "image",
    align: "center",
    render: (text, record) => <Avatar size={"large"} src={record.image} />,
  },
];

const StudentsList = () => {
  const { id } = useParams();
  const location = useLocation();
  const { type } = location.state || {};

  const faculty_id = localStorage.getItem("faculty_id") || 1;
  const [info, setInfo] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const { data: facultyAwardsAward } = useQuery(
    ["FacultyAwardsAward", id, faculty_id],
    () => FacultyAwardsAward(id, faculty_id),
    {
      onSuccess({ data }) {
        setInfo(data[0].students);
        setDataSource(
          data[0].students.map((item, index) => ({ ...item, key: index + 1 }))
        );
      },
    }
  );

  return (
    <>
      {type === "card" ? (
        <div className="py-16">
          <div className="mb-10 ml-2 flex items-center gap-4">
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
                  title: (
                    <Link to="/all-faculties/2?activeTab=2">
                      Iqtidorli talabalar
                    </Link>
                  ),
                },
                {
                  title: `${facultyAwardsAward?.data[0].award_name}`,
                },
              ]}
            />
          </div>
          <div className="grid grid-cols-4 gap-6 mb-10">
            {info.map((item) => {
              return <StudentsListCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      ) : type === "list" ? (
        <div className="py-16">
          <div className="mb-10 ml-2 flex items-center gap-4">
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
                  title: (
                    <Link to="/all-faculties/1?activeTab=2">
                      Iqtidorli talabalar
                    </Link>
                  ),
                },
                {
                  title: `${facultyAwardsAward?.data[0].award_name}`,
                },
              ]}
            />
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            bordered
          />
        </div>
      ) : (
        <div className="mt-40">
          <Empty
            image={<SmileOutlined style={{ fontSize: 48, color: "#08c" }} />}
            description="Hozircha hech narsa yo'q!"
          />
        </div>
      )}
    </>
  );
};

export default StudentsList;
