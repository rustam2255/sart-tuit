import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TeacherColumnDepart = ({ teacherPositions }) => {
  const male = teacherPositions?.map((item) => {
    return item.male;
  });

  const female = teacherPositions?.map((item) => {
    return item.female;
  });
  const position = teacherPositions?.map((item) => {
    return item.position;
  });

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `ASOSIY SHTATDAGI PROFESSOR-O‘QITUVCHILAR LAVOZIMI BO‘YICHA SONI: ${teacherPositions?.reduce((sum, item) => sum + item.count, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        // textTransform: "uppercase",
      },
    },
    xAxis: {
      categories: position,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: (Highcharts.theme && Highcharts.theme.textColor) || "#666",
        },
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:14px;margin-bottom:5px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>&nbsp; {point.y} ta</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
        pointPadding: 0,
        borderWidth: 0,
        series: {
          borderRadius: 10,
        },
      },
    },
    series: [
      {
        name: "Erkaklar",
        data: male,
        color: "#4A90E2",
      },
      {
        name: "Ayollar",
        data: female,
        color: "#50E3C2",
      },
    ],
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      shadow: false,
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TeacherColumnDepart;
