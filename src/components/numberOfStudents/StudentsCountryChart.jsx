import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsCountryChart = ({ dashboardStudentAbroad }) => {
  const newData = [];
  for (let i = 0; i < dashboardStudentAbroad?.length; i++) {
    let newObj = {
      name: dashboardStudentAbroad[i]?.name,
      y: dashboardStudentAbroad[i]?.students_count,
    };
    newData.push(newObj);
  }
  
  const options = {
    chart: {
      type: "pie",
      height: 500
    },
    title: {
      text: `XORIJIY TALABALAR SONI: ${dashboardStudentAbroad?.reduce((sum, item) => sum + item.students_count, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "40%",
        dataLabels: {
          enabled: true,
          distance: -30,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Talabalar soni",
        data: newData,
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "vertical",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "14px",
      },
      labelFormatter: function () {
        return this.name + " - " + this.y;
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsCountryChart;
