import { useNavigate } from "react-router-dom";
import studentSrc from "public/icons/student-icon.png";
import teachersSrc from "public/icons/teachers-icon.png";
import residenceSrc from "public/icons/residence-icon.png";
import locationSrc from "public/icons/location-icon.png";

const DashboardStatsCard = ({ dashboardStatistic }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 w-full">
      <div
        onClick={() => navigate("/students")}
        className={`dashboard__statistics-card cursor-pointer rounded-[1.25rem] p-5 sm:p-6 md:p-7 lg:p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100 min-h-[13rem] sm:min-h-[15rem] lg:min-h-[17rem]`}
        style={{ backgroundColor: "#ECECFF", width: "100%" }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="icon rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-[4.5rem] md:w-[4.5rem] bg-white flex items-center justify-center">
            <img
              src={studentSrc}
              alt="Statistic icon"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
            />
          </div>
          <p className="inter font-[500] text-lg sm:text-xl md:text-[1.5rem] leading-[1.4rem] sm:leading-[2rem]">
            Talabalar
          </p>
        </div>
        <p
          style={{ color: "#6461E1" }}
          className="numbers mt-5 sm:mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl font-[600]"
        >
          {dashboardStatistic?.students || 0}{" "}
          <span className="text-xl sm:text-3xl md:text-4xl">nafar</span>
        </p>
      </div>

      <div
        onClick={() => navigate("/teachers")}
        className={`dashboard__statistics-card cursor-pointer rounded-[1.25rem] p-5 sm:p-6 md:p-7 lg:p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100 min-h-[13rem] sm:min-h-[15rem] lg:min-h-[17rem]`}
        style={{ backgroundColor: "#F8E9FB", width: "100%" }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="icon rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-[4.5rem] md:w-[4.5rem] bg-white flex items-center justify-center">
            <img
              src={teachersSrc}
              alt="Statistic icon"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
            />
          </div>
          <p className="inter font-[500] text-lg sm:text-xl md:text-[1.5rem] leading-[1.4rem] sm:leading-[2rem]">
            Professor-o‘qituvchilar
          </p>
        </div>
        <p
          style={{ color: "#E462CD" }}
          className="numbers mt-5 sm:mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl font-[600]"
        >
          {dashboardStatistic?.teachers || 0}{" "}
          <span className="text-xl sm:text-3xl md:text-4xl">nafar</span>
        </p>
      </div>

      <div
        onClick={() => navigate("/students-residence")}
        className={`dashboard__statistics-card cursor-pointer rounded-[1.25rem] p-5 sm:p-6 md:p-7 lg:p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100 min-h-[13rem] sm:min-h-[15rem] lg:min-h-[17rem]`}
        style={{ backgroundColor: "#FBF8E9", width: "100%" }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="icon rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-[4.5rem] md:w-[4.5rem] bg-white flex items-center justify-center">
            <img
              src={residenceSrc}
              alt="Statistic icon"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
            />
          </div>
          <p className="inter font-[500] text-lg sm:text-xl md:text-[1.5rem] leading-[1.4rem] sm:leading-[2rem]">
            Talabalar yashash joyi
          </p>
        </div>
        <p
          style={{ color: "#D4BC20" }}
          className="numbers mt-5 sm:mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl font-[600]"
        >
          {dashboardStatistic?.ttj_students || 0}{" "}
          <span className="text-xl sm:text-3xl md:text-4xl">nafar</span>
        </p>
      </div>

      <div
        onClick={() => navigate("/mapping")}
        className={`dashboard__statistics-card cursor-pointer rounded-[1.25rem] p-5 sm:p-6 md:p-7 lg:p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100 min-h-[13rem] sm:min-h-[15rem] lg:min-h-[17rem]`}
        style={{ backgroundColor: "#66C62B1F", width: "100%" }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="icon rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-[4.5rem] md:w-[4.5rem] bg-white flex items-center justify-center">
            <img
              src={locationSrc}
              alt="Statistic icon"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
            />
          </div>
          <p className="inter font-[500] text-lg sm:text-xl md:text-[1.5rem] leading-[1.4rem] sm:leading-[2rem]">
            Umumiy maydoni
          </p>
        </div>
        <div
          className={`numbers mt-5 sm:mt-6 md:mt-8 text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-[600] leading-[1.2]`}
          style={{ color: "#66C62B" }}
        >
          {dashboardStatistic?.arena || 0}{" "}
          <sup className="align-baseline text-[0.5em] sm:text-[0.55em] md:text-[0.5em] lg:text-[0.55em] xl:text-[0.5em]">
            m²
          </sup>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsCard;