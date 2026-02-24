import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);

const RatingSocialStatus = ({ socialStatusData }) => {
  const colors = [
    "#ff6b6b",
    "#ffe66d",
    "#4dabf5",
    "#38c172",
    "#9b59b6",
    "#A29FB2FF",
    "#FF33F5",
  ];

  const newData = socialStatusData?.map((item, index) => ({
    name: item.name,
    y: item.students,
    z: 150,
    color: colors[index % colors.length],
  })) || [];

  const totalStudents = socialStatusData?.reduce(
    (sum, item) => sum + item.students,
    0
  );

  const options = {
    chart: { type: "variablepie", height: 400 },
    title: {
      text: `TALABALARNING IJTIMOIY HOLATI BO‘YICHA TAQSIMOTI: ${totalStudents} nafar`,
      align: "left",
      style: { fontSize: "1rem", fontWeight: "bold" },
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
        minPointSize: 10,
        innerSize: "40%",
        zMin: 0,
        name: "students",
        data: newData,
      },
    ],
    plotOptions: {
      variablepie: {
        cursor: "pointer",
        borderRadius: "15%",
        borderWidth: 5,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: { fontSize: "0.75rem", fontWeight: "bold" },
          distance: 10,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "vertical",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: { fontSize: "0.7rem" },
      symbolHeight: 10,
    },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 768 },
          chartOptions: {
            chart: { height: 300 },
            plotOptions: {
              variablepie: {
                dataLabels: { style: { fontSize: "0.6rem" }, distance: 6 },
              },
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              itemStyle: { fontSize: "0.6rem" },
            },
            title: { style: { fontSize: "0.875rem" } },
          },
        },
      ],
    },
    credits: { enabled: false },
  };

  return (
    <div className="border border-[rgba(232,232,232,1)] p-4 md:p-6 rounded-lg w-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RatingSocialStatus;