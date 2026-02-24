import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);
const FacultyBarChart = ({ positions }) => {
  const newData = [];
  
  for (let i = 0; i < positions?.length; i++) {
    let obj = {
      name: positions[i].position,
      y: positions[i].count,
    };
    newData.push(obj);
  }
  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `PROFESSOR-O‘QITUVCHILARNING LAVOZIMI BO‘YICHA SONI: ${positions?.reduce((sum, item) => sum + item.count, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizda: <b>{point.percentage:.1f}%</b><br/>",
    },
    series: [
      {
        minPointSize: 50,
        innerSize: "50%",
        zMin: 0,
        name: "teachers",
        data: newData,
      },
    ],
    plotOptions: {
      variablepie: {
        dataLabels: {
          enabled: true,
          format: "{y}",
          distance: 50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        showInLegend: true,
      },
    },
    legend: {
      align: "right",
      layout: "vertical",
      labelFormatter: function () {
        return this.name + ": " + this.y;
      },
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "500",
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

export default FacultyBarChart;
