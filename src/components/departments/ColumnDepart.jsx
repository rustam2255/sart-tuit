import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnDepart = ({ departmentAcademicPercentage }) => {
  const internal = [],
    external = [],
    departments = [];
    
  for (let i in departmentAcademicPercentage) {
    departments.push(i);
    internal.push(departmentAcademicPercentage?.[i].internal);
    external.push(departmentAcademicPercentage?.[i].external);
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Professor-o‘qituvchilarning ilmiy salohiyati (kafedralar kesimida)",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
      },
    },
    xAxis: {
      categories: departments,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Foiz bo'yicha",
      },
      labels: {
        format: "{value}%",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding: 3px"><b>{point.y:.1f}%</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        cursor: "pointer",
        borderRadius: "15%",
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
          style: {
            fontSize: "16px",
          },
          distance: 40,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Asosiy",
        data: internal,
        color: "#00E272FF",
      },
      {
        name: "O‘rindosh",
        data: external,
        color: "#BCE215FF",
      },
    ],
    legend: {
      layout: "horizontal",
      align: "center",
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
            maxWidth: 768, // mobil ekranlar uchun
          },
          chartOptions: {
            title: {
              style: { fontSize: "14px" },
            },
            plotOptions: {
              column: {
                dataLabels: {
                  style: { fontSize: "12px" },
                  distance: 20,
                },
              },
            },
            legend: {
              itemStyle: { fontSize: "12px" },
            },
            yAxis: {
              labels: { style: { fontSize: "12px" } },
            },
            xAxis: {
              labels: { style: { fontSize: "12px" } },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232,232,232,1)] p-6 rounded-lg w-full h-[500px] sm:h-[400px] md:h-[450px]">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: "100%", height: "100%" } }}
      />
    </div>
  );
};

export default ColumnDepart;