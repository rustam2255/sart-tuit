import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainStudentsGrand = ({ dashboardStudentPayment }) => {
  const courses = [];
  const grant_students = [];
  const contract_students = [];
  

  for (let i = 0; i < dashboardStudentPayment?.courses.length; i++) {
    courses.push(`${dashboardStudentPayment?.courses[i].course}-kurs`);

    grant_students.push(dashboardStudentPayment?.courses[i]?.grant_students);
    contract_students.push(dashboardStudentPayment?.courses[i]?.contract_students);
  }
  

  const options = {
    chart: {
      type: "column",
      height: "520px",
    },
    title: {
      text: `TALABALARNING TO‘LOV SHAKLI TAQSIMOTI: ${dashboardStudentPayment?.students} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: courses,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      formatter: function () {
        let s = `<span style="font-size:14px">${this.x}</span><table>`;
        let total = 0;
        this.points.forEach((point) => {
          total += point.y;
        });
        this.points.forEach((point) => {
          const percentage = ((point.y / total) * 100).toFixed(1);
          s +=
            `<tr><td style="color:${point.series.color};padding:0">${point.series.name}: </td>` +
            `<td style="padding:0"><b>&nbsp;${point.y} ta (${percentage}%)</b></td></tr>`;
        });
        s +=
          `<tr style="font-weight:bold"><td>Umumiy: </td>` +
          `<td><b>&nbsp;${total}/${dashboardStudentPayment?.students}, (${((total / dashboardStudentPayment?.students) * 100).toFixed(
            1
          )}%)</b></td></tr></table>`;
        return s;
      },
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: `Davlat granti - ${grant_students?.reduce(
          (sum, item) => sum + item,
          0
        )}`,
        data: grant_students,
        color: "#FF6B6BFF",
      },
      {
        name: `To‘lov shartnoma - ${contract_students?.reduce(
          (sum, item) => sum + item,
          0
        )}`,
        data: contract_students,
        color: "rgba(139, 92, 246, 1)",
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

export default MainStudentsGrand;
