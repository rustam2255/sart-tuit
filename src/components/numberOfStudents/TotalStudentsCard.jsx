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

  const isMobile = window.innerWidth < 640;

  const options = {
    chart: {
      type: "variablepie",
      height: isMobile ? 350 : 500, // 📱 mobile height
    },

    title: {
      text: `UMUMIY TALABALAR SONI: ${
        newData?.reduce((sum, item) => sum + item.y, 0)
      } nafar`,
      align: "left",
      style: {
        fontSize: isMobile ? "13px" : "16px",
        fontWeight: "bold",
      },
    },

    plotOptions: {
      variablepie: {
        innerSize: isMobile ? "50%" : "60%",
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: {
          enabled: !isMobile, // 📱 mobile’da o‘chadi
          distance: 10,
          style: {
            fontWeight: "bold",
            color: "white",
            fontSize: isMobile ? "10px" : "12px",
          },
        },
        showInLegend: true,
      },
    },

    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },

    legend: {
      align: "center",
      verticalAlign: "bottom",
      layout: isMobile ? "horizontal" : "vertical", // 📱 mobile’da gorizontal
      itemStyle: {
        fontWeight: "bold",
        fontSize: isMobile ? "11px" : "13px",
      },
      labelFormatter: function () {
        return this.name + " - " + this.y;
      },
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 640,
          },
          chartOptions: {
            legend: {
              align: "center",
            },
          },
        },
      ],
    },

    series: [
      {
        minPointSize: 15,
        innerSize: isMobile ? "50%" : "40%",
        zMin: 0,
        data: newData,
      },
    ],
  };

  return (
    <div className="border border-[rgba(232,232,232,1)] p-4 sm:p-6 rounded-lg overflow-x-auto">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TotalStudentsCard;