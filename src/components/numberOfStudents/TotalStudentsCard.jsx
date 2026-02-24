import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";


VariablePie(Highcharts);

const z = [95, 131, 198, 208];
const TotalStudentsCard = ({ dashboardStudents }) => {
  const newData = [];
  
  for (let i = 0; i < dashboardStudents?.length - 1; i++) {
    newData.push({
      name: dashboardStudents[i].name,
      y: dashboardStudents[i].students,
      z: z[i],
    });
  }
  

  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `UMUMIY TALABALAR SONI: ${newData?.reduce((sum, item) => sum + item.y, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      variablepie: {
        innerSize: "60%",
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: {
          enabled: true,
          distance: 10,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        showInLegend: true,
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },

    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "vertical",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "13px",
      },
      labelFormatter: function () {
        return this.name + " - " + this.y;
      },
    },
    series: [
      {
        minPointSize: 15,
        innerSize: "40%",
        zMin: 0,
        data: newData,
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TotalStudentsCard;
