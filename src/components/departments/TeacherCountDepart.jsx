import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

const data = [
  { color: "#FF8C33" },
  { color: "#FF3333" },
  { color: "#33A1FF" },
  { color: "#F533FF" },
  { color: "#33FF33" },
  { color: "#5733FF" },
  { color: "#FFB533" },
  { color: "#33FFB5" },
  { color: "#B533FF" },
  { color: "#FFA133" },
  { color: "#33B5FF" },
];

VariablePie(Highcharts);
const TeacherCountDepart = ({ departmentLocale }) => {
  const newData = [];

  for (let i = 0; i < departmentLocale?.length; i++) {
    let newObj = {
      name: departmentLocale[i]?.department_name,
      y: departmentLocale[i]?.teachers_count,
      color: data[i].color,
    };
    newData.push(newObj);
  }
  const options = {
    chart: {
      type: "variablepie",
      height: "45%",
    },
    title: {
      text: `Kafedralar kesimida asosiy shtatdagi professor-o‘qituvchilar soni`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
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
      layout: "horizontal",
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
          condition: {
            maxWidth: 640,
          },
          chartOptions: {
            chart: {
              height: 400,
            },
            title: {
              style: {
                fontSize: "13px",
              },
            },
            plotOptions: {
              series: {
                dataLabels: [
                  
                  {
                    enabled: true,
                    distance: -20,
                    format: "{point.percentage:.0f}%",
                  },
                ],
              },
            },
            legend: {
              align: "center",
              layout: "horizontal",
              verticalAlign: "bottom",
              itemStyle: {
                fontSize: "11px",
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg relative">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="absolute bottom-5 right-5">
        <p className="text-[#505050] font-bold text-lg">Jami: {departmentLocale?.reduce(
          (sum, item) => sum + item.teachers_count,
          0
        )} nafar</p>
      </div>
    </div>
  );
};

export default TeacherCountDepart;