import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BusyStudentsNum = ({ employments }) => {
  const company = {};
  if (employments?.length) {
    company.with = employments[0]?.students;
    company.without = employments[1]?.students;
    company.total = employments[2]?.students;
  }

  const options = {
    chart: {
      type: "pie",
     
    },
    title: {
      text: `ISH BILAN BAND TALABALAR: ${company?.total} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat:
        "{series.name}: <b>{point.percentage:.1f}%</b></br>Soni: <b>{point.y} ta</b>",
    },
    plotOptions: {
      pie: {
        innerSize: "60%", 
        dataLabels: {
          enabled: true,
          format: "{point.percentage:.0f}%",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
          },
          distance: -30,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Talabalar",
        colorByPoint: true,
        data: [
          {
            name: "Ish bilan band talabalar",
            y: company?.with,
            color: "#007bff",
          },
          {
            name: "Ish bilan band bo'lmagan talabalar",
            y: company?.without,
            color: "#e9ecef",
          },
        ],
      },
    ],
    legend: {
      align: "center", 
      layout: "horizontal", 
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12,
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 480, 
          },
          chartOptions: {
            chart: {
              
              width: null,
              height: null,
            },
            title: {
              style: {
                fontSize: "14px",
              },
            },
            plotOptions: {
              pie: {
                innerSize: "50%", 
                dataLabels: {
                  distance: -20,
                  style: {
                    fontSize: "14px",
                  },
                },
              },
            },
            legend: {
              align: "center", 
              layout: "horizontal", 
              itemStyle: {
                fontSize: "12px",
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-4 sm:p-6 rounded-lg max-w-full mx-auto">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BusyStudentsNum;