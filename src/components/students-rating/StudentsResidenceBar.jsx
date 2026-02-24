import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const StudentsResidenceBar = ({ accommodation }) => {
  const names = [];
  const male = [];
  const female = [];
  for (let i = 0; i < accommodation?.length; i++) {
    names.push(accommodation[i].name);
    male.push(accommodation[i].male);
    female.push(accommodation[i].female);
  }
  let sum =
    male?.reduce((sum, item) => sum + item, 0) +
    female?.reduce((sum, item) => sum + item, 0);

  const options = {
    chart: {
      type: "bar",
      height: "65%",
    },
    title: {
      text: `TALABALARNING TURAR JOYI BO‘YICHA TAQSIMOTI: ${sum} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: names,
      labels: {
        style: {
          fontWeight: "bold",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
        align: "high",
        style: {
          fontWeight: "bold",
        },
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
        },
        pointWidth: 20,
        pointPadding: 0.3,
        groupPadding: 0.1,
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
      symbolHeight: 12,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "O‘g‘il talabalar",
        data: male,
        color: "#2CAFFEFF",
      },
      {
        name: "Qiz talabalar",
        data: female,
        color: "#00E272FF",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsResidenceBar;
