import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo, useContext } from "react";
import { FacultyContext } from "../../context/FacultyProvider";

const StudentTotalChart = () => {
  const { studentsData } = useContext(FacultyContext);
  const data = [
    {
      name: "Davlat granti",
      y: studentsData?.grand,
      color: "#cce6ff",
    },
    {
      name: "To‘lov shartnoma",
      y: studentsData?.contract,
      color: "#007bff",
    },
  ];

  const options = {
    chart: {
      type: "pie",
      height: "100%", // responsive height
    },
    title: {
      text: `JAMI TALABALAR SONI: ${studentsData?.total || 0} nafar`,
      align: "left",
      style: {
        fontSize: "1rem", // kichik ekranlar uchun o‘lcham
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "60%",
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.1f} %",
          style: {
            fontSize: "0.75rem", // kichik ekran uchun
          },
        },
      },
    },
    series: [
      {
        name: "Foizi",
        colorByPoint: true,
        data: data,
      },
    ],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768, // kichik ekranlar uchun
          },
          chartOptions: {
            chart: {
              height: 300,
            },
            title: {
              style: {
                fontSize: "0.875rem",
              },
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  style: {
                    fontSize: "0.65rem",
                  },
                },
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col border border-[rgba(232,232,232,1)] p-4 md:p-6 rounded-lg w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="info flex flex-col text-justify gap-2 md:gap-3 border border-[rgba(232,232,232,1)] rounded-lg p-3 md:p-4 mt-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="info__row flex items-center justify-between flex-wrap"
          >
            <div className="flex items-center gap-2 min-w-[150px] md:min-w-[12rem]">
              <span
                style={{ backgroundColor: item.color }}
                className="block rounded-full w-3 h-3 md:w-3 md:h-3"
              ></span>
              <span className="text-sm md:text-base font-bold">
                {item.name}
              </span>
            </div>
            <span className="block text-sm md:text-base font-bold text-[rgba(115,115,115,1)] mt-1 md:mt-0">
              {item.y}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(StudentTotalChart);