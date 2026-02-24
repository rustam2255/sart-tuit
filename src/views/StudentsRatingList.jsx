import { Table, Avatar } from "antd";
import avatar from "../assets/avatar.png";
import Gpa1 from "../components/students-rating-list/Gpa1";
import { useQuery } from "react-query";
import { StudentRatingCourseTop20, StudentRatingTop20 } from "../api/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const StudentsRatingList = () => {
  const [info, setInfo] = useState({});
  const [info2, setInfo2] = useState({});
  const [info3, setInfo3] = useState({});
  const [info4, setInfo4] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const { id } = useParams();

  useQuery(
    ["StudentRatingCourseTop20"],
    () => StudentRatingCourseTop20(id),
    {
      onSuccess({ data }) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].course === 1) {
            let newGroupsData = [];
            let newGroupsName = [];
            for (let j = 0; j < data[i].groups.length; j++) {
              newGroupsName.push(data[i].groups[j].group_name);
              newGroupsData.push(data[i].groups[j].avg_gpa);
            }
            setInfo({
              title: "1-kurslar bo‘yicha reyting (o‘rtacha GPA bali)",
              groups: newGroupsName,
              data: newGroupsData,
              colors: [
                "#eff6ff",
                "#e0f2fe",
                "#dbeafe",
                "#bae6fd",
                "#bfdbfe",
                "#93c5fd",
                "#7dd3fc",
                "#60a5fa",
                "#38bdf8",
                "#3b82f6",
                "#0ea5e9",
                "#2563eb",
                "#0284c7",
                "#0369a1",
                "#1d4ed8",
                "#075985",
                "#1e40af",
                "#1e3a8a",
                "#0c4a6e",
                "#1e3a8a",
              ],
            });
          } else if (data[i].course === 2) {
            let newGroupsData = [];
            let newGroupsName = [];
            for (let j = 0; j < data[i].groups.length; j++) {
              newGroupsName.push(data[i].groups[j].group_name);
              newGroupsData.push(data[i].groups[j].avg_gpa);
            }
            setInfo2({
              title: "2-kurslar bo‘yicha reyting (o‘rtacha GPA bali)",
              groups: newGroupsName,
              data: newGroupsData,
              colors: [
                "#f0fdf4",
                "#dcfce7",
                "#bbf7d0",
                "#86efac",
                "#4ade80",
                "#22c55e",
                "#16a34a",
                "#15803d",
                "#166534",
                "#14532d",
                "#10b981",
                "#0f9f69",
                "#0d8557",
                "#0b6b45",
                "#095334",
                "#073b23",
                "#052515",
                "#041a10",
                "#03120c",
                "#020a07",
              ],
            });
          } else if (data[i].course === 3) {
            let newGroupsData = [];
            let newGroupsName = [];
            for (let j = 0; j < data[i].groups.length; j++) {
              newGroupsName.push(data[i].groups[j].group_name);
              newGroupsData.push(data[i].groups[j].avg_gpa);
            }
            setInfo3({
              title: "3-kurslar bo‘yicha reyting (o‘rtacha GPA bali)",
              groups: newGroupsName,
              data: newGroupsData,
              colors: [
                "#fef2f2",
                "#fee2e2",
                "#fecaca",
                "#fca5a5",
                "#f87171",
                "#ef4444",
                "#dc2626",
                "#b91c1c",
                "#991b1b",
                "#7f1d1d",
                "#fca5a5",
                "#f87171",
                "#ef4444",
                "#dc2626",
                "#b91c1c",
                "#991b1b",
                "#7f1d1d",
                "#6b1515",
                "#550f0f",
                "#3f0808",
              ],
            });
          } else {
            let newGroupsData = [];
            let newGroupsName = [];
            for (let j = 0; j < data[i].groups.length; j++) {
              newGroupsName.push(data[i].groups[j].group_name);
              newGroupsData.push(data[i].groups[j].avg_gpa);
            }
            setInfo4({
              title: "4-kurslar bo‘yicha reyting (o‘rtacha GPA bali)",
              groups: newGroupsName,
              data: newGroupsData,
              colors: [
                "#fefce8",
                "#fef9c3",
                "#fef08a",
                "#fde047",
                "#facc15",
                "#eab308",
                "#ca8a04",
                "#a16207",
                "#854d0e",
                "#713f12",
                "#fde68a",
                "#fcd34d",
                "#fbbf24",
                "#f59e0b",
                "#d97706",
                "#b45309",
                "#92400e",
                "#78350f",
                "#633112",
                "#4d250e",
              ],
            });
          }
        }
      },
      enabled: !!id,
    }
  );

  useQuery(
    ["StudentRatingTop20"],
    () => StudentRatingTop20(id),
    {
      onSuccess(data) {
        setDataSource(
          data.data.map((item, index) => ({ ...item, key: index + 1 }))
        );
      },
      enabled: !!id,
    }
  );

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
      align: "center",
      responsive: ["sm"],
    },
    {
      title: "TALABALANING ISM, FAMILIYA, OTASINING ISMI",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "GURUHI",
      dataIndex: "group_name",
      key: "group_name",
      align: "center",
      responsive: ["sm"],
    },
    {
      title: "Kursi",
      dataIndex: "course",
      key: "course",
      align: "center",
      render: (text, record) => <p>{record.course} - kurs</p>,
      responsive: ["sm"],
    },
    {
      title: "GPA",
      dataIndex: "avg_gpa",
      key: "avg_gpa",
      align: "center",
    },
    {
      title: "RASMI",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text, record) => (
        <Avatar size={"large"} src={record.image ? record.image : avatar} />
      ),
      responsive: ["sm"],
    },
  ];

  return (
    <div className="py-16">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <Gpa1 info={info} />
        <Gpa1 info={info2} />
        <Gpa1 info={info3} />
        <Gpa1 info={info4} />
      </div>

      {/* Responsive table with horizontal scroll */}
      <div className="overflow-x-auto">
        <Table
          dataSource={dataSource || []}
          columns={columns}
          pagination={false}
          bordered
        />
      </div>
    </div>
  );
};

export default StudentsRatingList;