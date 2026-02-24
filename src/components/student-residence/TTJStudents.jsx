import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TTJStudents = () => {
  let empty = [33, 7, 63, 76];
  let male = [600, 493, 537, 324];
  let female = [467, 0, 0, 0];
  const options = {
    chart: {
      type: "bar"
    },
    title: {
      text: "TALABALARNING TURAR JOYI BO‘YICHA",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: ["TTJ 1", "TTJ 2", "TTJ 3", "TTJ 4"],
      labels: {
        style: {
          fontWeight: "bold"
        },
      },
    },
  //   legend: {
  //     reversed: true
  // },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
        style: {
          fontWeight: "bold",
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: "50%",
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "13px",
            // fontWeight: "bold",
          },
        },
        cursor: "pointer",
        showInLegend: true,
        pointWidth: 22,
        pointPadding: 0.2,
        groupPadding: 0.5,
      },
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },

    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      backgroundColor: "#FFFFFF",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12,
    },

    series: [
      {
        name: "Bo'sh joylar",
        data: empty,
        color: "#CECFD1FF",
      },
      {
        name: "Qiz talabalar",
        data: female,
        color: "#F87171",
      },
      {
        name: "O‘g‘il talabalar",
        data: male,
        color: "#2CAFFEFF",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TTJStudents;
