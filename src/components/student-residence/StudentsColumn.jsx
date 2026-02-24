import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsColumn = ({ studentGender }) => {
  const names = [];
  const male = [];
  const female = [];

  for (let i = 0; i < studentGender?.length; i++) {
    names.push(studentGender[i].name);
    male.push(studentGender[i].male);
    female.push(studentGender[i].female);
  }
  let sum =
    male?.reduce((sum, item) => sum + item, 0) +
    female?.reduce((sum, item) => sum + item, 0);
  const options = {
    chart: {
      type: "column",
      height: "500px",
    },
    title: {
      text: `TALABALARNING TURAR JOYI BO‘YICHA SONI: ${sum} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: names,
      crosshair: true,
      labels: {
        style: {
          fontWeight: "bold",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
        style: {
          fontWeight: "bold",
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
    plotOptions: {
      column: {
        borderRadius: "20%",
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          distance: 60,
        },
        pointPadding: 0.14,
        borderWidth: 10,
      },
    },
    series: [
      {
        name: "O‘g‘il talabalar soni",
        data: male,
        color: "#A105C4",
      },
      {
        name: "Qiz talabalar soni",
        data: female,
        color: "#FFD25F",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsColumn;
