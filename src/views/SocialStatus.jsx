import { Link, useNavigate } from "react-router-dom";
import SocialStatusCard from "../components/social-status/SocialStatusCard";
import SocialStatusChart from "../components/social-status/SocialStatusChart";
import { Breadcrumb, Tabs } from "antd";
import SocialStatusBar from "../components/social-status/SocialStatusBar";
import { DashboardStudentSocial } from "../api/api";
import { useQuery } from "react-query";
import { useState } from "react";

const { TabPane } = Tabs;

const colorData = [
  {
    id: 1,
    name: "“TEMIR DAFTAR”",
    description:
      "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
    students: 6554,
    backgroundColor: "#FDEAEA",
    color: "#E9090C",
  },
  {
    id: 2,
    name: "“IJTIMOIY HIMOYA REESTRI”",
    description:
      "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
    students: 2154,
    backgroundColor: "#F9EAFD",
    color: "#D609E9",
  },
  {
    id: 3,
    name: "“AYOLLAR DAFTARI”",
    description:
      "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
    students: 2530,
    backgroundColor: "#EAFDF2",
    color: "#09E944",
  },
  {
    id: 4,
    name: "“YOSHLAR DAFTARI”",
    description:
      "“TEMIR DAFTAR” DAGI TALABALAR TTJ LARGA NAVBATSIZ JOYLASHTIRILADI",
    students: 1512,
    backgroundColor: "#EAEFFD",
    color: "#0914E9",
  },
  {
    id: 5,
    name: "“CHIN YETIM VA MEHRIBONLIK UYI”",
    description:
      "MEHRIBONLIK UYI TARBIYALANUVCHILARIGA 9 OY DAVOMIDA 300 MLN SO'M TO'LAB BERILADI",
    students: 5484,
    backgroundColor: "#FDFCEA",
    color: "#E9A209",
  },
  {
    id: 6,
    name: "“NOGIRONLIGI BOR”",
    description: "NOGIRONLIGI BOR TALABALARGA TTJ BEPUL QILIB BERILADI",
    students: 2459,
    backgroundColor: "#09DAE91A",
    color: "#09DAE9",
  },
];

const tabData = [
  {
    key: "1",
    title: "Nukus filiali",
    content: (
      <div className="pt-10">
        <div className="grid grid-cols-6 gap-6 mb-12">
          {colorData.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusBar />
      </div>
    ),
  },

  {
    key: "2",
    title: "Urganch filiali",
    content: (
      <div className="pt-10">
        <div className="grid grid-cols-6 gap-6 mb-12">
          {colorData.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusBar />
      </div>
    ),
  },
  {
    key: "3",
    title: "Samarqand filiali",
    content: (
      <div className="pt-10">
        <div className="grid grid-cols-6 gap-6 mb-12">
          {colorData.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusBar />
      </div>
    ),
  },
  {
    key: "4",
    title: "Farg'ona filiali",
    content: (
      <div className="pt-10">
        <div className="grid grid-cols-6 gap-6 mb-12">
          {colorData.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusBar />
      </div>
    ),
  },
  {
    key: "5",
    title: "Qarshi filiali",
    content: (
      <div className="pt-10">
        <div className="grid grid-cols-6 gap-6 mb-12">
          {colorData.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusBar />
      </div>
    ),
  },
  {
    key: "6",
    title: "Nurafshon filiali",
    content: (
      <div className="pt-10">
        <div className="grid grid-cols-6 gap-6 mb-12">
          {colorData.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>
        <SocialStatusBar />
      </div>
    ),
  },
];

const SocialStatus = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const [socialData, setSocialData] = useState([]);

  const activeTab = params.get("activeTab") || "1";

  const onTabChange = (key) => {
    params.set("activeTab", key);
    navigate({ search: params.toString() });
  };

  const { data: socialStudents } = useQuery(
    ["DashboardStudentSocial"],
    DashboardStudentSocial,
    {
      onSuccess({ data }) {
        const arr = data.map((item, index) => ({
          id: index + 1,
          name: item.name,
          students: item.students,
          description: item.description,
          backgroundColor: colorData[index]?.backgroundColor,
          color: colorData[index]?.color,
        }));
        setSocialData(arr);
      },
    }
  );

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
              title: "Talabalarning ijtimoiy holati",
            },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socialData?.map((branchItem) => (
            <SocialStatusCard key={branchItem.id} {...branchItem} />
          ))}
        </div>

        <div className="w-full overflow-hidden">
          <SocialStatusChart socialStudents={socialStudents?.data} />
        </div>
      </div>

      <div className="overflow-x-auto md:overflow-x-hidden">
        <Tabs
          type="line"
          tabBarGutter={20}
          moreIcon={null}
          className="responsive-tabs w-full overflow-x-hidden"
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
              <div className="pt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
                  {colorData.map((branchItem) => (
                    <SocialStatusCard
                      key={branchItem.id}
                      {...branchItem}
                    />
                  ))}
                </div>

                
                  <SocialStatusBar />
                
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SocialStatus;