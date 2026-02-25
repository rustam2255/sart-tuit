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
          className="flex items-center justify-center gap-3 inter text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem]"
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Chiqish
        </div>
      ),
    },
  ];

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  useQuery(["academic-years"], GetAcademicYears, {
    onSuccess({ data }) {

      setSemesters(
        data[0].semesters.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        })
      );
      setAcademicYears(
        data.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        })
      );
    },
  });



  return (
    <>
      <div className="py-[1rem] md:py-[1.2rem] inter">
        <header className="w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-3">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="logo flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logoSrc}
              alt="TUIT logo"
              className="w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[3.9rem] md:h-[3.9rem] object-cover"
            />

            <div className="hidden lg:block">
              <div className="text-[0.75rem] md:text-[0.857rem] text-[#1E1E1EB2] font-[500] uppercase">
                MUHAMMAD AL-XORAZMIY NOMIDAGI
              </div>
              <div className="text-[0.75rem] md:text-[0.857rem] text-[#1E1E1EB2] font-[500] uppercase leading-tight">
                Toshkent axborot <br /> texnologiyalari universiteti
              </div>
            </div>
          </div>

          {/* NAV */}
          <nav className="flex flex-wrap md:flex-nowrap items-center justify-end gap-2 sm:gap-3 md:gap-5 w-full md:w-auto">

            {/* Faculties select */}
            {window.location.pathname === "/all-faculties" && (
              <div className="hidden lg:block">
                <Select
                  defaultValue="kif"
                  style={{ width: "fit-content" }}
                  options={[
                    { value: "kif", label: "Kompyuter injiniring fakulteti" },
                    { value: "dif", label: "Dasturiy injiniring fakulteti" },
                    { value: "ax", label: "Axborot xavfsizligi" },
                  ]}
                />
              </div>
            )}

            {/* SEARCH (faqat md dan boshlab ko‘rinadi) */}
            <div className="hidden md:flex nav-search rounded-[8px] border border-[#1E1E1E1A] w-[14rem] lg:w-[20rem] p-[0.4rem_0.8rem] bg-white items-center gap-2 text-[#1E1E1E99] font-[500]">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                value={searchText}
                placeholder="Qidiruv"
                onChange={(e) => handleSearchInput(e)}
                className="outline-none border-none text-black placeholder:text-[#1E1E1E99] w-full bg-transparent"
              />
            </div>

            {/* Fullscreen */}
            <div
              onClick={toggleFullScreen}
              className="hidden md:flex cursor-pointer border border-[#1E1E1E33] p-2 items-center justify-center rounded-md"
            >
              <i className="fa-solid fa-expand text-[1rem] md:text-[1.2rem]"></i>
            </div>

            {/* Select group */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">

              <Select
                defaultValue={"2024-2025"}
                size="small"
                className="min-w-[90px] sm:min-w-[110px]"
                options={academicYears}
              />

              <Select
                defaultValue={2}
                size="small"
                className="min-w-[70px] sm:min-w-[90px]"
                options={semesters}
              />

              <Select
                defaultValue={"uzb"}
                size="small"
                className="w-[80px] sm:w-[90px]"
              >
                <Option value="uzb">
                  <div className="flex items-center gap-2">
                    <img src={uzb} alt="UZB" className="w-4" />
                    <span className=" sm:inline">UZB</span>
                  </div>
                </Option>
                <Option value="rus">
                  <div className="flex items-center ">
                    <img src={rus} alt="RUS" className="w-4" />
                    <span className=" sm:inline">RUS</span>
                  </div>
                </Option>
                <Option value="eng">
                  <div className="flex items-center gap-2">
                    <img src={eng} alt="ENG" className="w-4" />
                    <span className=" sm:inline">ENG</span>
                  </div>
                </Option>
              </Select>
            </div>

            {/* User dropdown */}
            <Dropdown menu={{ items }} placement="bottomRight">
              <div className="cursor-pointer flex items-center gap-2">
                <img
                  src={logoSrc}
                  alt="User"
                  className="object-cover rounded-full h-[2rem] w-[2rem] sm:h-[2.25rem] sm:w-[2.25rem]"
                />

                <div className="hidden sm:block">
                  <div className="text-[0.8rem] font-[500] text-[#1E1E1E]">
                    Admin
                  </div>
                  <div className="text-[0.7rem] text-[#1E1E1EB2]">
                    Admin
                  </div>
                </div>
              </div>
            </Dropdown>

          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
