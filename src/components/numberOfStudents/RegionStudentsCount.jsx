import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RegionStudentsCount = ({ dashboardStudentLocationOfStudy }) => {
  console.log(dashboardStudentLocationOfStudy);

  const region = [];
  const first = [];
  const second = [];
  const third = [];
  const fourth = [];
  const five = [];

  for (
    let i = 1;
    i < dashboardStudentLocationOfStudy?.Regions.length - 1;
    i++
  ) {
    region.push(dashboardStudentLocationOfStudy?.Regions[i].region);
    first.push(dashboardStudentLocationOfStudy?.Regions[i]["1_students_count"]);
    second.push(
      dashboardStudentLocationOfStudy?.Regions[i]["2_students_count"]
    );
    third.push(dashboardStudentLocationOfStudy?.Regions[i]["3_students_count"]);
    fourth.push(
      dashboardStudentLocationOfStudy?.Regions[i]["4_students_count"]
    );
    five.push(dashboardStudentLocationOfStudy?.Regions[i]["5_students_count"]);
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `VILOYATLAR KESIMIDA TALABALAR SONI: ${dashboardStudentLocationOfStudy?.students} nafar`,
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        // textTransform: "uppercase",
      },
    },
    xAxis: {
      categories: region,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
        style: {
          fontWeight: "bold",
        },
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
          `<td><b>&nbsp;${total}/${
            dashboardStudentLocationOfStudy?.students
          }, (${(
            (total / dashboardStudentLocationOfStudy?.students) *
            100
          ).toFixed(1)}%)</b></td></tr></table>`;
        return s;
      },
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        borderRadius: "20%",
        pointPadding: 0.1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          distance: 60,
        },
      },
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
    series: [
      {
        name: "1-kurs",
        data: first,
      },
      {
        name: "2-kurs",
        data: second,
      },
      {
        name: "3-kurs",
        data: third,
      },
      {
        name: "4-kurs",
        data: fourth,
      },
      {
        name: "5-kurs",
        data: five,
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RegionStudentsCount;
