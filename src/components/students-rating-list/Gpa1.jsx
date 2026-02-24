import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Gpa1 = ({ info }) => {
  const options = {
    chart: {
      type: "column",
      height: window.innerWidth < 640 ? 400 : 400, // kichik ekran uchun mos balandlik
    },
    title: {
      text: info?.title,
      align: "left",
      style: {
        fontSize: window.innerWidth < 640 ? "14px" : "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: info?.groups,
      crosshair: true,
      labels: {
        style: {
          fontSize: window.innerWidth < 640 ? "10px" : "12px",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "O'rtacha GPA",
        style: {
          fontSize: window.innerWidth < 640 ? "12px" : "14px",
        },
      },
      labels: {
        overflow: "justify",
        style: {
          fontSize: window.innerWidth < 640 ? "10px" : "12px",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        cursor: "pointer",
        borderRadius: "15%",
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: window.innerWidth < 640 ? "10px" : "16px",
            fontWeight: "bold",
          },
          // tor ekran uchun distance kamaytirildi
          distance: window.innerWidth < 640 ? 20 : 60,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "GPA",
        data: info?.data,
        colorByPoint: true,
        colors: info?.colors,
        showInLegend: false,
      },
    ],
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: window.innerWidth < 640 ? "10px" : "16px",
      },
      symbolHeight: 12,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 640,
          },
          chartOptions: {
            plotOptions: {
              column: {
                pointWidth: 20, // mobil uchun barlar torroq
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

export default Gpa1;