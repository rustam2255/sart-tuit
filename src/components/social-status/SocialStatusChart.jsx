import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { name: "Temir daftar", y: 6, color: "#ff6b6b" },
  { name: "Ayollar daftari", y: 30, color: "#ffe66d" },
  { name: "Yoshlar daftari", y: 25, color: "#4dabf5" },
  { name: "Ijtimoiy himoya reestri", y: 13, color: "#38c172" },
  { name: "Nogitonligi bor", y: 38, color: "#9b59b6" },
  {
    name: "Chin yetim",
    y: 8,
    color: "#A29FB2FF",
  },
  {
    name: "Mexribonlik uyi",
    y: 4,
    color: "#A29FB2FF",
},
];

VariablePie(Highcharts);
const SocialStatusChart = ({ socialStudents }) => {
  const arr = socialStudents?.map((item, index) => {
    return {
      y: item.students,
      name: item.name,
      color: data[index].color
    }
  })

  const options = {
    chart: {
      type: "variablepie",
      height: "95%",
    },
    title: {
      text: `TALABALARNING IJTIMOIY HOLATI: ${socialStudents?.reduce((sum, item) => sum + item.students, 0)}`,
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
        innerSize: "40%",
        zMin: 10,
        name: "teachers",
        data: arr,
      },
    ],
    plotOptions: {
      variablepie: {
        cursor: "pointer",
        borderRadius: "10%",
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
          distance: 50,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "horizantal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "14px",
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

export default SocialStatusChart;
