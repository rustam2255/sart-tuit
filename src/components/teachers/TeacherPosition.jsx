import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TeacherPosition = ({ teacherPosition }) => {
  const newData = teacherPosition?.map((item) => ({
    name: item.position,
    y: item.count,
  }));

  const total = teacherPosition
  ? teacherPosition.reduce((sum, item) => sum + Number(item.count || 0), 0)
  : 680;

  const options = {
    chart: {
      type: "pie",
      events: {
        render() {
          const chart = this;

          if (!chart.customLabel) {
            chart.customLabel = chart.renderer
              .text(
                `<div style="text-align:center">
                   <span style="font-size:18px;font-weight:bold">${total}</span><br/>
                   <span style="font-size:12px;color:#666">Jami</span>
                 </div>`,
                chart.plotWidth / 2 + chart.plotLeft,
                chart.plotHeight / 2 + chart.plotTop
              )
              .css({ textAlign: "center" })
              .attr({ align: "center" })
              .add();
          }

          chart.customLabel.attr({
            x: chart.plotWidth / 2 + chart.plotLeft,
            y: chart.plotHeight / 2 + chart.plotTop,
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
            maxWidth: 640,
          },
          chartOptions: {
            chart: {
              height: 400,
            },
            title: {
              style: {
                fontSize: "13px",
              },
            },
            plotOptions: {
              series: {
                dataLabels: [
                  {
                    enabled: true,
                  },
                  {
                    enabled: true,
                    distance: -20,
                    format: "{point.percentage:.0f}%",
                  },
                ],
              },
            },
            legend: {
              align: "center",
              layout: "horizontal",
              verticalAlign: "bottom",
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
    <div className="border-[1px] border-[rgba(232,232,232,1)] p-4 sm:p-6 rounded-lg overflow-x-auto">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TeacherPosition;