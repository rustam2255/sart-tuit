import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";
import { useEffect, useState } from "react";

VariablePie(Highcharts);

const StudentsNation = ({ foreignLocalData }) => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const total = foreignLocalData?.reduce(
      (sum, item) => sum + item.students_count,
      0
    );

    // Mobil uchun font va minPointSize moslashuvi
    const isMobile = window.innerWidth < 640;
    const pointSize = isMobile ? 50 : 70;
    const fontSize = isMobile ? "12px" : "16px";
    const distance = isMobile ? 10 : 20;

    const newData = foreignLocalData?.map((item) => ({
      name: item.name,
      y: item.students_count,
    }));

    setChartOptions({
      chart: {
        type: "variablepie",
      },
      title: {
        text: `XORIJIY TALABALAR SONI: ${total} nafar`,
        align: "left",
        style: {
          fontSize: isMobile ? "14px" : "16px",
          fontWeight: "bold",
        },
      },
      tooltip: {
        headerFormat: "",
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          "Soni: <b>{point.y}</b><br/>" +
          "Foizi: <b>{point.percentage:.1f}%</b><br/>",
      },
      series: [
        {
          minPointSize: pointSize,
          innerSize: "50%",
          zMin: 0,
          name: "students",
          data: newData,
        },
      ],
      plotOptions: {
        variablepie: {
          cursor: "pointer",
          borderRadius: "20%",
          borderWidth: 1,
          dataLabels: {
            enabled: true,
            format: "{point.y}",
            style: {
              fontSize: fontSize,
              fontWeight: "bold",
            },
            distance: distance,
          },
          showInLegend: true,
        },
      },
      legend: {
        layout: "vertical",
        align: "left",
        verticalAlign: "bottom",
        labelFormatter: function () {
          return this.name + " - " + this.y;
        },
        itemStyle: {
          fontWeight: "bold",
          fontSize: isMobile ? "12px" : "14px",
        },
        symbolHeight: 12,
      },
    });
  }, [foreignLocalData]);

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg w-full overflow-auto">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default StudentsNation;