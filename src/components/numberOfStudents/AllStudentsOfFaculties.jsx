import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AllStudentsOfFaculties = ({ dashboardStudentFaculty }) => {
  // const maleData = [1537, 920, 886, 280, 550, 630, 412, 500];
  // const femaleData = [216, 87, 195, 195, 150, 347, 208, 300];
  const maleData = [];
  const femaleData = [];
  const faculty = [];
  
  for (let i = 0; i < dashboardStudentFaculty?.length; i++) {
    maleData.push(dashboardStudentFaculty[i].male);
    femaleData.push(dashboardStudentFaculty[i].female);
    faculty.push(dashboardStudentFaculty[i].faculty_name);
  }
  let sum = maleData?.reduce((sum, item) => sum + item, 0) + femaleData?.reduce((sum, item) => sum + item, 0);

  // const totalStudents = maleData.map((maleCount, index) => maleCount + femaleData[index]);
  // const percentageMale = maleData.map((count, index) => ((count / totalStudents[index]) * 100).toFixed(1));
  // const percentageFemale = femaleData.map((count, index) => ((count / totalStudents[index]) * 100).toFixed(1));

  const options = {
    chart: {
      type: "bar",
      height: 500
    },
    title: {
      text: `FAKULTETLAR KESIMIDA UMUMIY TALABALAR SONI: ${sum} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: faculty,
      labels: {
        style: {
          fontWeight: "500"
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
        align: "high",
        style: {
          fontWeight: "bold"
        }
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: "50%",
        dataLabels: {
          enabled: true,
          formatter: function () {
            const count = this.y;

            return `${count}`;
          },
        },
        pointWidth: 10,
        pointPadding: 0.3,
        groupPadding: 0.1,
      },
    },
    tooltip: {
      shared: true,
      useHTML: true,
      // formatter: function () {
      //   const total = totalStudents[this.point.index];
      //   const maleCount = this.points[0].y;
      //   const femaleCount = this.points[1].y;
      //   const percentageM = ((maleCount / total) * 100).toFixed(1);
      //   const percentageF = ((femaleCount / total) * 100).toFixed(1);
      //   return `
      //     <b>${this.x}</b><br>
      //     Erkaklar: ${maleCount}, (${percentageM}%)<br>
      //     Ayollar: ${femaleCount}, (${percentageF}%)<br>
      //     Umumiy: ${total}
      //   `;
      // },
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
            `<td style="padding:0"><b>&nbsp;${point.y} ta (${point.y ? percentage : 0}%)</b></td></tr>`;
        });
        s +=
          `<tr style="font-weight:bold"><td>Umumiy: </td>` +
          `<td><b>&nbsp;${total}/${7603}, (${((total / 7603) * 100).toFixed(
            1
          )}%)</b></td></tr></table>`;
        return s;
      },
    },
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
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "O‘g‘il talabalar",
        data: maleData, //[1537, 920,  886, 280, 550, 630, 412, 500]
        color: "#007bff",
      },
      {
        name: "Qiz talabalar",
        data: femaleData, //[216, 87,  195, 195, 150, 347, 208, 300]
        color: "#ffca28",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AllStudentsOfFaculties;
