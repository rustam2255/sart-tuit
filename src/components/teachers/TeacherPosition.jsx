import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TeacherPosition = ({ teacherPosition }) => {
  const newData = [];

  for (let i = 0; i < teacherPosition?.length; i++) {
    let newObj = {
      name: teacherPosition[i]?.position,
      y: teacherPosition[i]?.count,
    };
    newData.push(newObj);
  }

  const total = teacherPosition?.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const options = {
    chart: {
      type: "pie",
      events: {
        render() {
          const chart = this;

          // faqat 640px dan katta ekranlarda chiqaramiz
          if (window.innerWidth < 640) {
            if (chart.customLabel) {
              chart.customLabel.destroy();
              chart.customLabel = null;
            }
            return;
          }

          if (!chart.customLabel) {
            chart.customLabel = chart.renderer
              .text(
                `<div style="text-align:center;">
               <span style="font-size:20px;font-weight:bold;display:block;line-height:1">
                 ${total}
               </span>
               <span style="font-size:12px;display:block;line-height:1.2">
                 nafar
               </span>
             </div>`,
                0,
                0,
                true
              )
              .add();
          }

          // PERFECT CENTER hisoblash
          const centerX =
            chart.plotLeft + chart.series[0].center[0];

          const centerY =
            chart.plotTop + chart.series[0].center[1];

          chart.customLabel.attr({
            x: centerX - chart.customLabel.getBBox().width / 2,
            y: centerY - chart.customLabel.getBBox().height / 2,
          });
        },
      },
    },

    title: {
      text: `ASOSIY SHTATDAGI PROFESSOR-O‘QITUVCHILAR UMUMIY SONI: ${total} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
    },

    tooltip: {
      pointFormat:
        "{series.name}: <b>{point.percentage:.0f}%</b></br>Soni: <b>{point.y} ta</b>",
    },

    series: [
      {
        name: "Foizda",
        colorByPoint: true,
        innerSize: "45%",
        data: newData,
      },
    ],

    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
          {
            enabled: true,
            distance: 20,
            format: "{point.name}",
          },
          {
            enabled: true,
            distance: -25,
            format: "{point.percentage:.0f}%",
            style: {
              fontSize: "0.8em",
              color: "white",
            },
          },
        ],
        showInLegend: true,
      },
    },

    legend: {
      align: "right",
      layout: "vertical",
      labelFormatter: function () {
        return this.name + " - " + this.y;
      },
      verticalAlign: "bottom",
      itemStyle: {
        fontSize: "12px",
      },
      symbolHeight: 10,
    },


    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            title: {
              style: {
                fontSize: "12px",
              },
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              itemStyle: {
                fontSize: "10px",
              },
            },
            plotOptions: {
              series: {
                dataLabels: [
                  {
                    enabled: true,
                    distance: 10,
                    format: "{point.name}",
                    style: {
                      fontSize: "10px",
                    },
                  },
                  {
                    enabled: true,
                    distance: -18,
                    format: "{point.percentage:.0f}%",
                    style: {
                      fontSize: "14px",
                      color: "black",
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TeacherPosition;