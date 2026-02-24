import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

// Initialize the module
VariablePie(Highcharts);

const FilialStudentData = ({ dashboardBranches }) => {
  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `UMUMIY TALABALAR SONI - ${
        dashboardBranches ? dashboardBranches[0]?.total_students : 0
      } nafar`,

      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      variablepie: {
        innerSize: "50%",
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: {
          enabled: true,
          distance: 30,
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
      layout: "horizantal",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "13px",
      },
      labelFormatter: function () {
        return this?.name + " - " + this?.y;
      },
    },
    series: [
      {
        minPointSize: 35,
        innerSize: "70%",
        zMin: 0,
        data: dashboardBranches
          ? [
              {
                name: "Kunduzgi ta'lim talabalari",
                y: dashboardBranches[0]?.internal_students,
              },
              {
                name: "Magistratura talabalari",
                y: dashboardBranches[0]?.master_students,
              },
              {
                name: "Sirtqi talabalari",
                y: dashboardBranches[0]?.external_students,
              },
              {
                name: "Masofaviy ta'lim talabalari",
                y: dashboardBranches[0]?.remote_students,
              },
            ]
          : [],
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FilialStudentData;
