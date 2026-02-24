import DepartCard from "./DepartCard";
import TeacherColumnDepart from "./TeacherColumnDepart";
import TeacherGenterDepart from "./TeacherGenterDepart";
import TeacherPotensialDepart from "./TeacherPotensialDepart";
import { Avatar, Table } from "antd";
const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
    align: "center",
  },
  {
    title: "ILMIY O‘QUV LABORATORIYALAR",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Avatar size="large" src={record.image} />
        <span>{record.name}</span>
      </div>
    ),
  },
];


const DepartmentTab = ({
  addentionalInfo,
  labaratories,
  teachersEmploymentForm,
  teachersEmploymentGenders,
  teacherPositions
}) => {
  let dataSource = [];
  
  for (let i = 0; i < labaratories?.length; i++) {
    dataSource.push({ key: i + 1, name: labaratories[i].name, image: labaratories[i].image });
  }

  const data = [
    {
      id: 1,
      bgColor: "rgba(183, 209, 234, 0.2)",
      textColor: "rgba(32, 149, 212, 1)",
      number: addentionalInfo?.average_age,
      text: "O‘qituvchilar o‘rtacha yoshi",
    },
    {
      id: 2,
      bgColor: "rgba(0, 186, 52, 0.2)",
      textColor: "rgba(0, 186, 52, 1)",
      number: addentionalInfo?.academicDegree,
      text: "Ilmiy darajali o‘qituvchilar soni",
    },
    {
      id: 3,
      bgColor: "rgba(139, 92, 246, 0.2)",
      textColor: "#8B5CF6FF",
      number: 5,
      text: "ILMIY UNVONLILAR SONI",
    },
    {
      id: 4,
      bgColor: "rgba(243, 94, 84, 0.2)",
      textColor: "rgba(243, 94, 84, 1)",
      number: 3,
      text: "DOKTARANTLAR VA MUSTAQIL IZLANUVCHILAR SONI",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-12">
        <TeacherPotensialDepart
          teachersEmploymentForm={teachersEmploymentForm}
        />
        <TeacherGenterDepart
          teachersEmploymentGenders={teachersEmploymentGenders}
        />
      </div>
      <div className="grid grid-cols-4 gap-6 mb-10">
        {data.map((item) => {
          return <DepartCard key={item.id} item={item} />;
        })}
      </div>
      <div id="department-tab" className="grid grid-cols-3 gap-6 my-12">
        <div className="col-span-1">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false} 
            bordered
          />
        </div>
        <div className="col-span-2">
          <TeacherColumnDepart teacherPositions={teacherPositions} />
        </div>
      </div>
    </>
  );
};

export default DepartmentTab;
