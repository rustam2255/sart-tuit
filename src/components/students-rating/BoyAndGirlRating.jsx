import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FacultyContext } from "../../context/FacultyProvider";
import { memo, useContext } from "react";

const BoyAndGirlRating = () => {
  const { studentsData } = useContext(FacultyContext);

  const data = [  
    {
      name: "O‘g‘il talabalar soni",
      y: studentsData?.male,
      color: "rgba(248, 113, 113, 1)",
    },
    {
      name: "Qiz talabalar soni",
      y: studentsData?.female,
      color: "rgba(255, 207, 84, 1)",
    },
  ];
  const options = {
    chart: {
      type: "pie",
      height: "400px",
    },
    title: {
      text: `TALABALAR JINSI BO‘YICHA SONI: ${studentsData?.total} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
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
  };

  return (
    <div className="flex flex-col border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="info flex flex-col text-justify gap-3 border-[1px] border-solid border-[rgba(232, 232, 232, 1)] rounded-[10.33px] p-[15px]">
        {data.map((item) => (
          <div
            key={item.name}
            className="info__row flex items-center justify-between"
          >
            <div className="flex items-center gap-1">
              <span
                style={{ backgroundColor: item.color }}
                className="block rounded-full w-[0.75rem] h-[0.75rem]"
              ></span>
              <span className="min-w-[12rem] text-base font-bold pl-[0.6rem] pr-[1rem]">
                {item.name}
              </span>
            </div>
            <span className="block text-base font-bold text-[rgba(115, 115, 115, 1)]">
              {item.y}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(BoyAndGirlRating);
