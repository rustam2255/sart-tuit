import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);
const TeacherPotensialDepart = ({ teachersEmploymentForm }) => {
  const data = [
    {
      name: "ASOSIY SHTATDAGILAR",
      y: teachersEmploymentForm?.full_teachers_count,
      z: 300,
      color: "#FF33A5FF",
    },
    {
      name: "O‘RINDOSHLAR",
      y: teachersEmploymentForm?.external_teachers_count,
      z: 300,
      color: "#FF8C33FF",
    },
  ];
  const options = {
    chart: {
      type: "variablepie",
      height: "40%",
    },
    title: {
      text: `KAFEDRA PROFESSOR-O'QITUVCHILAR SONI: ${teachersEmploymentForm?.teachers_count} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        // textTransform: "uppercase",
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
        minPointSize: 10,
        innerSize: "20%",
        zMin: 0,
        name: "teachers",
        data: data,
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

export default TeacherPotensialDepart;
