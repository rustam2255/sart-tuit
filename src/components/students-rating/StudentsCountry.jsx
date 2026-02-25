import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { z: 1485, color: "#FF5733" },
  { z: 2059, color: "#33FF57" },
  { z: 2254, color: "#3357FF" },
  {
    z: 2200,
    color: "#FF33A1",
  },
  { z: 2254, color: "#A133FF" },
  { z: 2459, color: "#33FFF5" },
  { z: 1485, color: "#F5FF33" },
  { z: 2059, color: "#FF8C33" },
  { z: 2254, color: "#8C33FF" },
  {
    z: 2200,
    color: "#33FF8C",
  },
  { z: 2254, color: "#FF3333" },
  { z: 2459, color: "#33A1FF" },
  { z: 2459, color: "#F533FF" },
  { z: 2459, color: "#33FF33" },
  { z: 2459, color: "#5733FF" },
  { z: 2459, color: "#FFB533" },
  { z: 2459, color: "#33FFB5" },
  { z: 2459, color: "#B533FF" },
  { z: 2459, color: "#FFA133" },
  { z: 2459, color: "#33B5FF" },
];

VariablePie(Highcharts);
const StudentsCountry = ({ citizentshipData }) => {
  const newData = [];
  for (let i = 0; i < citizentshipData?.length; i++) {
    let newObj = {
      name: citizentshipData[i]?.citizenship,
      y: citizentshipData[i]?.student_count,
      z: data[i].z,
      color: data[i].color,
    };
    newData.push(newObj);
  }


  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `TALABALARNING FUQAROLIGI BO'YICHA UMUMIY SONI: ${citizentshipData?.reduce((sum, item) => sum + item.student_count, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
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
        minPointSize: 70,
        innerSize: "30%",
        zMin: 0,
        name: "teachers",
        data: newData,
      },
    ],
    plotOptions: {
      variablepie: {
        cursor: "pointer",
        borderRadius: "8%",
        borderWidth: 5,
        dataLabels: {
          enabled: true,
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
      layout: "vertical",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
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

export default StudentsCountry;
