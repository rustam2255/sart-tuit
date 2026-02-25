import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import VariablePie from "highcharts/modules/variable-pie";

// Variable-pie modulini Highcharts-ga yuklaymiz
// VariablePie(Highcharts);
const FacultyCountTeachers = ({facultyData}) => {
  const options = {
    chart: {
      type: "pie",
      height: '500px'
    },
    title: {
      text: `FAKULTETLAR BO'YICHA PROFESSOR-O'QITUVCHILAR SONI: ${facultyData?.reduce((sum, item) => sum + item.y, 0)} nafar`,
      align: 'left', 
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
    // tooltip: {
    //   headerFormat: "",
    //   pointFormat:
    //     '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
    //     "Soni: <b>{point.y}</b><br/>" +
    //     "Foizda: <b>{point.percentage:.1f}%</b><br/>",
    // },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.0f}%</b></br>Soni: <b>{point.y} ta</b>",
    },
    // series: [
    //   {
    //     minPointSize: 10,
    //     innerSize: "40%",
    //     zMin: 0,
    //     name: "teachers",
    //     data: data,
    //   },
    // ],
    series: [
      {
        name: "Foizda",
        colorByPoint: true,
        innerSize: "55%",
        data: facultyData
      },
    ],
    // plotOptions: {
    //   variablepie: {
    //     borderRadius: "15%",
    //     borderWidth: 10,
    //     dataLabels: {
    //       enabled: true,
    //       format: "{y}",
    //       distance: 20, 
    //       style: {
    //         fontWeight: "bold",
    //         color: "#333",
    //         fontSize: "16px",
    //       },
    //     },
    //     showInLegend: true,
    //   },
    // },
    plotOptions: {
  series: {
    allowPointSelect: true,
    cursor: "pointer",
    borderRadius: 8,
    dataLabels: [
      {
        distance: 20,
        style: {
          fontSize: "0.9em",
        },
        formatter() {
          return window.innerWidth > 640 ? this.point.name : null;
        },
      },
      {
        distance: -30,
        style: {
          fontSize: "0.9em",
        },
        formatter() {
          return window.innerWidth > 640
            ? `${Math.round(this.point.percentage)}%`
            : null;
        },
      },
    ],
    showInLegend: true,
  },
},
    legend: {
      labelFormatter: function () {
        return this.name + " - " + this.y; 
      },
      // verticalAlign: "bottom",
      layout: "horizontal",
      // align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "400",
        fontSize: "12px",
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

export default FacultyCountTeachers;
