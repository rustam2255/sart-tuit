import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsCountryChart = ({ dashboardStudentAbroad }) => {
  const newData = [];

  for (let i = 0; i < dashboardStudentAbroad?.length; i++) {
    newData.push({
      name: dashboardStudentAbroad[i]?.name,
      y: dashboardStudentAbroad[i]?.students_count,
    });
  }

  const totalStudents = dashboardStudentAbroad?.reduce(
    (sum, item) => sum + item.students_count,
    0
  );

  const options = {
    chart: {
      type: "pie",
      height: 500, // ✅ Desktop unchanged
    },

    title: {
      text: `XORIJIY TALABALAR SONI: ${totalStudents} nafar`,
      align: "left",
      style: {
        fontSize: "16px", // ✅ Desktop unchanged
        fontWeight: "bold",
      },
    },

    plotOptions: {
      pie: {
        innerSize: "40%", // ✅ Desktop unchanged
        dataLabels: {
          enabled: true, // ✅ Desktop unchanged
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
      layout: "vertical", // ✅ Desktop unchanged
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
        '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },

    credits: {
      enabled: false,
    },

    // 🔥 ONLY MOBILE CHANGES HERE
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 640,
          },
          chartOptions: {
            chart: {
              height: 380,
            },
            title: {
              style: {
                fontSize: "14px",
              },
            },
            plotOptions: {
              pie: {
                innerSize: "55%",
                dataLabels: {
                  enabled: false, // 📱 mobile’da sonlar o‘chadi
                },
              },
            },
            legend: {
              align: "center",
              layout: "horizontal",
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
    <div className="border border-[rgba(232,232,232,1)] p-4 sm:p-6 rounded-lg overflow-x-auto">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsCountryChart;