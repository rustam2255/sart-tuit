import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { color: "#FF33A5FF" },
  { color: "#BCE215FF" },
  { color: "#33A1FF" },
  { color: "#F533FF" },
  { color: "#FF8C33FF" },
  { color: "#5733FF" },
  { color: "#FFB533" },
  { color: "#33FFB5" },
  { color: "#B533FF" },
  { color: "#FFA133" },
  { color: "#33B5FF" },
];

VariablePie(Highcharts);

const ForegnTeacherDepart = ({ departmentGlobal }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newData = departmentGlobal?.map((d, i) => ({
    name: d.department_name,
    y: d.count,
    color: data[i]?.color,
  }));

  const options = {
    chart: {
      type: "variablepie",
      height: isMobile ? 500 : "45%", // 🔹 mobile uchun kattaroq height
    },
    title: {
      text: `KAFEDRALAR BO‘YICHA XORIJIY PROFESSOR-O‘QITUVCHILAR SONI: ${departmentGlobal?.reduce(
        (sum, item) => sum + item.count,
        0
      )} nafar`,
      align: "left",
      style: {
        fontSize: isMobile ? "14px" : "16px", // mobile title kichrayadi
        fontWeight: "bold",
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },
    series: [
      {
        minPointSize: 50, // 🔹 mobile uchun kichik segmentlar ham ko‘rinadi
        innerSize: isMobile ? "55%" : "40%", // 🔹 mobile ichki radius kattaroq
        zMin: 0,
        name: "teachers",
        data: newData,
      },
    ],
    plotOptions: {
      variablepie: {
        cursor: "pointer",
        borderRadius: "8%",
        borderWidth: 8,
        dataLabels: {
          enabled: !isMobile ? true : false, // 🔹 mobile da sonlar o‘chadi
          format: "{point.y}",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
          distance: 20,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: isMobile ? "horizontal" : "vertical", // 🔹 mobile pastga, desktop vertical
      align: isMobile ? "center" : "right",
      verticalAlign: isMobile ? "bottom" : "middle",
      itemStyle: {
        fontWeight: "bold",
        fontSize: isMobile ? "12px" : "14px",
      },
      symbolHeight: 12,
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ForegnTeacherDepart;