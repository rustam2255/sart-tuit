import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FacultyColumnChart = ({ departmentContingent }) => {

  const full = [];
  const external = [];
  const hourly = [];
  const internal_adjunct = [];
  const internal_main = [];
  const department_name = [];
  for (let i = 0; i < departmentContingent?.length; i++) {
    full.push(departmentContingent[i]?.full);
    external.push(departmentContingent[i]?.external);
    hourly.push(departmentContingent[i]?.hourly);
    internal_adjunct.push(departmentContingent[i]?.internal_adjunct);
    internal_main.push(departmentContingent[i]?.internal_main);
    department_name.push(departmentContingent[i].department_name);
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `PROFESSOR-O‘QITUVCHILAR KONTINGENTI: ${departmentContingent?.reduce(
        (sum, item) => sum + item.count,
        0
      )} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: department_name,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Soni bo'yicha",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: (Highcharts.theme && Highcharts.theme.textColor) || "#666",
        },
      },
    },
    legend: {
      align: "left",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "white",
      // borderColor: "#CCC",
      // borderWidth: 1,
      itemStyle: {
        fontWeight: "600",
        fontSize: "14px",
      },
      shadow: false,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}", //{point.stackTotal} - umumiy
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
        pointPadding: 0,
        borderWidth: 0,
        series: {
          borderRadius: 10,
        },
      },
    },
    series: [
      {
        name: "Asosiy",
        data: full,
        color: "#FF5733 ",
        zIndex: 1,
      },
      {
        name: "O'rindosh (tashqi)",
        data: external,
        color: "#33FF57",
        zIndex: 0,
      },
      {
        name: "O'rindosh (ichki asosiy)",
        data: internal_main,
        color: "#3357FF",
        zIndex: 0,
      },
      {
        name: "O'rindosh (ichki qo'shimcha)",
        data: internal_adjunct,
        color: "#FFD700",
        zIndex: 0,
      },
      {
        name: "Soatbay",
        data: hourly,
        color: "#FF33A1",
        zIndex: 0,
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyColumnChart;
