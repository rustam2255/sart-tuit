import backgroundTUIT from "public/img/background-tuit.png";
import departmentIcon1 from "public/icons/branch1.svg";
import departmentIcon2 from "public/icons/branch2.svg";
import departmentIcon3 from "public/icons/branch3.svg";
import backgroundTemporary from "public/img/facultyBackgroundTemporary.jfif";
import economyBackground from "public/img/economy_background.webp";
import difBackground from "public/img/dif_background.jpg";
import cyberBackground from "public/img/cyber_background.jfif";
import kifBackground from "public/img/kif_background.jfif";
import aktBackground from "public/img/akt_background.jpg";
import telekomBackground from "public/img/telekom_background.jpg";
import radioBackground from "public/img/radio_background.jfif";
import televisionBackground from "public/img/television_background.jfif";
import economyLogo from "public/img/economy_logo.svg";
import difLogo from "public/img/dif.svg";
import cyberLogo from "public/img/cyber_logo.svg";
import kifLogo from "public/img/kif_logo.svg";
import aktLogo from "public/img/akt_logo.svg";
import korLogo from "public/img/kor_logo.svg";
import radioLogo from "public/img/radio_logo.svg";
import telekomLogo from "public/img/telekom_logo.svg";
import televizion from "../assets/televizion.jpg";
import DashboardBranch from "../components/home/DashboardBranch";
import FacultyCard from "../components/home/FacultyCard";
import DashboardStatsCard from "../components/home/DashboardStatCard";
import { GetDashboardFaculties, GetDashboardStatistic } from "../api/api";
import { useQuery } from "react-query";
import { useContext } from "react";
import { AllDataContext } from "../context/AllDataProvider";

const datas = {
  faculties: [
    {
      id: 1,
      banner: kifBackground,
      color: "#325EA9DB",
      icon: kifLogo,
      name: "KOMPYUTER INJINIRING FAKULTETI",
    },
    {
      id: 7,
      banner: economyBackground,
      color: "#BAA548DB",
      icon: economyLogo,
      name: "AKT SOHASIDA IQTISODIY VA MENEJMENT FAKULTETI",
    },
    {
      id: 2,
      banner: difBackground,
      color: "#1B6F79DB",
      icon: difLogo,
      name: "DASTURIY INJINIRING FAKULTETI",
    },
    {
      id: 3,
      banner: cyberBackground,
      color: "#6680B3DB",
      icon: cyberLogo,
      name: "KIBERXAVFSIZLIK FAKULTETI",
    },

    {
      id: 8,
      banner: aktBackground,
      color: "#F5AE32DB",
      icon: aktLogo,
      name: "AKT SOHASIDAGI KASB TA'LIM FAKULTETI",
    },
    {
      id: 6,
      banner: radioBackground,
      color: "#007C7CDB",
      icon: radioLogo,
      name: "RADIO VA MOBIL ALOQA FAKULTETI",
    },
    {
      id: 4,
      banner: telekomBackground,
      color: "#67AFC7DB",
      icon: telekomLogo,
      name: "TELEKOMMUNIKATSIYA TEXNOLOGIYALAR FAKULTETI",
    },
    {
      id: 5,
      banner: televisionBackground,
      color: "#BBCA63DB",
      icon: televizion,
      name: "TELEVIZION TEXNOLOGIYALAR FAKULTETI",
    },
    {
      id: 107,
      banner: backgroundTemporary,
      color: "#A562E4DB",
      icon: economyLogo,
      name: "TATU-BGUIR QO'SHMA AXBOROT TEXNOLOGIYALARI FAKULTETI",
    },
    {
      id: 10,
      banner: backgroundTemporary,
      color: "#A562E4DB",
      icon: korLogo,
      name: "TATU-BGUIR QO'SHMA AXBOROT TEXNOLOGIYALARI FAKULTETI",
    },
    {
      id: 9,
      banner: backgroundTemporary,
      color: "#A562E4DB",
      icon: korLogo,
      name: "TATU-BGUIR QO'SHMA AXBOROT TEXNOLOGIYALARI FAKULTETI",
    },
  ],
  branches: [
    {
      id: 1,
      icon: departmentIcon1,
      title: "ILMIY ISHLAR VA INNOVATSIYALAR BO'LIMI",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque sed tincidunt iaculis egestas pulvinar donec.",
      link: "#",
    },
    {
      id: 2,
      icon: departmentIcon2,
      title: "HUDUDIY O'QUV MUASSASALAR BO'LIMI",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque sed tincidunt iaculis egestas pulvinar donec.",
      link: "/tuit-branches",
    },
    {
      id: 3,
      icon: departmentIcon3,
      title: "TALABALARNING IJTIMOIY HOLATI",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque sed tincidunt iaculis egestas pulvinar donec.",
      link: "/social-status",
    },
  ],
};

const Home = () => {
  const { faculties, setFaculties, statistic, setStatistic } =
    useContext(AllDataContext);
  // const activeSemester = +localStorage.getItem("active-semester") || 2;

  useQuery(["dashboard-statistic"], GetDashboardStatistic, {
    onSuccess(data) {
      setStatistic(data?.data);
    },
  });
  useQuery(["dashboard-faculties"], GetDashboardFaculties, {
    onSuccess({ data }) {
      const newFaculties = data.map((item) => {
        const matchingItem = datas.faculties.find(
          (element) => element.id == item.xmn_id
        );

        if (matchingItem) {
          return {
            ...item,
            icon: item.icon || matchingItem.icon,
            banner: item.banner || matchingItem.banner,
            color: matchingItem.color || item.color,
          };
        }

        return item;
      });
      setFaculties(newFaculties);
    },
  });

  return (
    <div className="!z-4 py-14">
      <p className="inter text-5xl font-[600] mb-3"></p>
      <p className="inter text-[1.8rem] font-[500] leading-[1.95rem] mb-5"> BUILD THE FUTURE WITH DIGITAL EDUCATION </p>
      <div className="relative">
        <div className="absolute mx-auto w-[60%] h-auto !z-[-2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
          <img
            src={backgroundTUIT}
            alt="TUIT"
            className="w-full h-full object-fit object-center"
          />
        </div>
        <div className="py-8 flex items-center gap-6 sm:flex-row sm:items-center sm:gap-6">
          <DashboardStatsCard dashboardStatistic={statistic} />
        </div>
        <p className="mt-4 text-[2rem] font-[700]">Fakultetlar</p>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {faculties.map((faculty) => (
            <FacultyCard key={faculty.id} {...faculty} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-[2rem] font-[700]">Bo&apos;limlar</p>
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {datas.branches.map((branch) => (
          <DashboardBranch key={branch.id} {...branch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
