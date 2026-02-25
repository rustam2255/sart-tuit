import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);

const FacultyBarChart = ({ positions }) => {
  // Series uchun data tayyorlash
  const newData = positions?.map((item) => ({
    name: item.position,
    y: item.count,
  })) || [];

  // Total count
  const totalCount = positions?.reduce((sum, item) => sum + item.count, 0) || 0;

  const options = {
    chart: {
      type: "variablepie",
      height: 500,
    },
    title: {
      text: `PROFESSOR-O‘QITUVCHILARNING LAVOZIMI BO‘YICHA SONI: ${totalCount} nafar`,
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
          allowOverlap: false, // ustma-ust chiqmaslik
          formatter() {
            // Desktopda label ko‘rsatadi, mobilda null
            return window.innerWidth > 640 ? this.point.y : null;
          },
          distance: 50,
          style: {
            fontWeight: "bold",
            color: "white",
            fontSize: window.innerWidth > 640 ? "16px" : "12px",
          },
        },
        showInLegend: true,
      },
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "bottom",
      labelFormatter: function () {
        return this.name + ": " + this.y;
      },
      itemStyle: {
        fontWeight: "500",
        fontSize: "16px",
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
            chart: {
              height: 400,
            },
            title: {
              style: {
                fontSize: "12px",
              },
            },
            plotOptions: {
              variablepie: {
                dataLabels: {
                  distance: 30, // label distance kamaytirildi
                },
              },
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
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
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg overflow-x-auto">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyBarChart;