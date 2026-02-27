import { Dropdown, Select } from "antd";
import logoSrc from "public/img/logo.webp";
import uzb from "public/img/flag_uzb.png";
import eng from "public/img/flag_eng.png";
import rus from "public/img/flag_rus.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { GetAcademicYears } from "../../api/api";

const { Option } = Select;

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [semesters, setSemesters] = useState([]);
  const [academicYears, setAcademicYears] = useState([]);

  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            navigate("/login");
            localStorage.clear();
          }}
          className="flex items-center justify-center gap-3 inter text-sm text-[#1E1E1EB2] font-medium"
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Chiqish
        </div>
      ),
    },
  ];

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleSearchInput = (e) => setSearchText(e.target.value);

  useQuery(["academic-years"], GetAcademicYears, {
    onSuccess({ data }) {
      setSemesters(
        data[0].semesters.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
      setAcademicYears(
        data.map((item) => ({
          value: item.id,
          label: item.name,
        }))
      );
    },
  });

  return (
    <div className="py-4 md:py-5  inter px-4 md:px-6">
      <header className="w-full flex flex-wrap items-center justify-between gap-3">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="logo flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logoSrc}
            alt="TUIT logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover"
          />
          <div className="hidden lg:block text-xs md:text-sm text-[#1E1E1EB2] font-medium uppercase leading-tight">
            <div>MUHAMMAD AL-XORAZMIY NOMIDAGI</div>
            <div>Toshkent axborot <br /> texnologiyalari universiteti</div>
          </div>
        </div>

        {/* Navigation and controls */}
        <nav className="flex flex-col sm:flex-row md:flex-nowrap items-center justify-end gap-2 sm:gap-3 md:gap-5 w-full md:w-auto">

          {/* Faculty Select */}
          {window.location.pathname === "/all-faculties" && (
            <div className="w-full md:w-auto hidden lg:block">
              <Select
                defaultValue="kif"
                className="w-full md:w-auto"
                options={[
                  { value: "kif", label: "Kompyuter injiniring fakulteti" },
                  { value: "dif", label: "Dasturiy injiniring fakulteti" },
                  { value: "ax", label: "Axborot xavfsizligi" },
                ]}
              />
            </div>
          )}

          {/* Search Input */}
          <div className="flex w-full sm:w-[18rem] md:w-[20rem] rounded-lg border border-[#1E1E1E1A] p-2 items-center gap-2 bg-white text-sm text-[#1E1E1E99]">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              value={searchText}
              placeholder="Qidiruv"
              onChange={handleSearchInput}
              className="outline-none border-none w-full bg-transparent text-black placeholder:text-[#1E1E1E99]"
            />
          </div>

          {/* Fullscreen button */}
          <div
            onClick={toggleFullScreen}
            className="hidden md:flex cursor-pointer border border-[#1E1E1E33] p-2 items-center justify-center rounded-md"
          >
            <i className="fa-solid fa-expand text-lg md:text-xl"></i>
          </div>

          {/* Academic Years, Semesters, Language Select */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
            <Select
              defaultValue={"2024-2025"}
              size="small"
              className="w-full sm:w-auto min-w-[90px] sm:min-w-[110px]"
              options={academicYears}
            />
            <Select
              defaultValue={2}
              size="small"
              className="w-full sm:w-auto min-w-[70px] sm:min-w-[90px]"
              options={semesters}
            />
            <Select
              defaultValue={"uzb"}
              size="small"
              className="w-full sm:w-auto min-w-[80px]"
            >
              <Option value="uzb">
                <div className="flex items-center gap-2">
                  <img src={uzb} alt="UZB" className="w-4" />
                  <span className="sm:inline">UZB</span>
                </div>
              </Option>
              <Option value="rus">
                <div className="flex items-center gap-2">
                  <img src={rus} alt="RUS" className="w-4" />
                  <span className="sm:inline">RUS</span>
                </div>
              </Option>
              <Option value="eng">
                <div className="flex items-center gap-2">
                  <img src={eng} alt="ENG" className="w-4" />
                  <span className="sm:inline">ENG</span>
                </div>
              </Option>
            </Select>
          </div>

          {/* User Dropdown */}
          <Dropdown menu={{ items }} placement="bottomRight">
            <div className="ml-auto flex items-center gap-2 cursor-pointer">
              <img
                src={logoSrc}
                alt="User"
                className="object-cover rounded-full h-8 w-8 sm:h-9 sm:w-9"
              />
              <div className="hidden sm:block text-sm font-medium text-[#1E1E1E]">
                <div>Admin</div>
                <div className="text-xs text-[#1E1E1EB2]">Admin</div>
              </div>
            </div>
          </Dropdown>

        </nav>
      </header>
    </div>
  );
};

export default Header;