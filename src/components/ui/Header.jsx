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
      <div className="py-[1.2rem] inter">
        <header className="w-full flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="logo flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logoSrc}
              alt="TUIT logo"
              className="w-[3.9rem] h-[3.9rem] sm:w-[4rem] sm:h-[4rem] object-cover"
            />

           
            <div className="hidden md:block">
              <div className="text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem] uppercase">
                MUHAMMAD AL-XORAZMIY NOMIDAGI
              </div>
              <div className="text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem] uppercase">
                Toshkent axborot <br /> texnologiyalari universiteti
              </div>
            </div>
          </div>

         
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6">

            
            {window.location.pathname === "/all-faculties" && (
              <div className="hidden md:block">
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

          
            <div className="hidden md:flex nav-search rounded-[8px] border-[2px] border-[#1E1E1E1A] w-[20rem] p-[0.5rem_1rem] bg-white items-center gap-2 text-[#1E1E1E99] font-[500]">
              <i className="fa-solid fa-magnifying-glass w-[1.125rem] h-[1.125rem]"></i>
              <input
                type="text"
                value={searchText}
                placeholder="Qidiruv"
                onChange={(e) => handleSearchInput(e)}
                className="outline-none border-none text-black placeholder:text-[#1E1E1E99]"
              />
            </div>

            
            <div
              onClick={toggleFullScreen}
              className="hidden md:flex cursor-pointer border border-[#1E1E1E33] p-2 items-center justify-center rounded-[0.375rem]"
            >
              <i className="fa-solid fa-expand text-[1.2rem]"></i>
            </div>

            
            <div className="flex items-center gap-2">

              <div className=" sm:block">
                <Select
                  defaultValue={"2024-2025"}
                  style={{ width: "fit-content" }}
                  options={academicYears}
                />
              </div>

              <div className=" sm:block">
                <Select
                  defaultValue={2}
                  style={{ width: "fit-content" }}
                  options={semesters}
                />
              </div>

              <Select
                defaultValue={"uzb"}
                className="w-[80px] sm:w-[100px]"
              >
                <Option value="uzb">
                  <div className="flex items-center gap-2">
                    <img src={uzb} alt="UZB" style={{ width: 16 }} />
                    UZB
                  </div>
                </Option>
                <Option value="rus">
                  <div className="flex items-center gap-2">
                    <img src={rus} alt="RUS" style={{ width: 16 }} />
                    RUS
                  </div>
                </Option>
                <Option value="eng">
                  <div className="flex items-center gap-2">
                    <img src={eng} alt="ENG" style={{ width: 16 }} />
                    ENG
                  </div>
                </Option>
              </Select>
            </div>

          
            <Dropdown menu={{ items }} placement="bottom">
              <div className="cursor-pointer flex items-center gap-2">
                <img
                  src={logoSrc}
                  alt="User"
                  className="object-cover rounded-full h-[2rem] w-[2rem] sm:h-[2.25rem] sm:w-[2.25rem]"
                />

                <div className="hidden sm:block">
                  <div className="text-[0.875rem] font-[500] text-[#1E1E1E]">
                    Admin
                  </div>
                  <div className="text-[0.75rem] text-[#1E1E1EB2]">
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
