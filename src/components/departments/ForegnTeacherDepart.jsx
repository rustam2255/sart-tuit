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
  const newData = departmentGlobal?.map((item, index) => ({
    name: item?.department_name,
    y: item?.count,
    color: data[index]?.color || "#ccc",
  })) || [];

  const totalTeachers = departmentGlobal?.reduce((sum, item) => sum + item.count, 0);

  const options = {
    chart: {
      type: "variablepie",
      height: "100%", // container o‘lchamiga moslashadi
    },
    title: {
      text: `KAFEDRALAR BO‘YICHA XORIJIY PROFESSOR-O‘QITUVCHILAR SONI: ${totalTeachers} nafar`,
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
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "14px",
      },
      symbolHeight: 12,
    },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 768 }, // mobil ekranlar uchun
          chartOptions: {
            chart: { height: "60%" },
            title: { style: { fontSize: "14px" } },
            plotOptions: {
              variablepie: {
                dataLabels: {
                  style: { fontSize: "14px" },
                  distance: 10,
                },
              },
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              itemStyle: { fontSize: "12px" },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232,232,232,1)] p-6 rounded-lg w-full h-[500px] sm:h-[400px] md:h-[450px]">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </div>
  );
};

export default ForegnTeacherDepart;