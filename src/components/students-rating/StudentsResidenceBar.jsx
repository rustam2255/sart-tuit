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
    (male?.reduce((sum, item) => sum + item, 0) || 0) +
    (female?.reduce((sum, item) => sum + item, 0) || 0);

  const options = {
    chart: {
      type: "bar",
      height: window.innerWidth > 640 ? "65%" : 350, // mobilga moslash
    },
    title: {
      text: `TALABALARNING TURAR JOYI BO‘YICHA TAQSIMOTI: ${sum} nafar`,
      align: "left",
      style: {
        fontSize: window.innerWidth > 640 ? "16px" : "14px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: names,
      labels: {
        style: {
          fontWeight: "bold",
          fontSize: window.innerWidth > 640 ? "14px" : "12px",
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
          fontSize: window.innerWidth > 640 ? "14px" : "12px",
        },
      },
      labels: {
        overflow: "justify",
        style: {
          fontSize: window.innerWidth > 640 ? "14px" : "12px",
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: "50%",
        pointWidth: window.innerWidth > 640 ? 20 : 12,
        pointPadding: 0.3,
        groupPadding: 0.1,
        dataLabels: {
          enabled: true,
          allowOverlap: false,
          formatter() {
            // faqat desktopda ko‘rsatadi
            return window.innerWidth > 640 ? this.point.y : null;
          },
          style: {
            fontSize: window.innerWidth > 640 ? "16px" : "12px",
            fontWeight: "bold",
          },
        },
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
        fontSize: window.innerWidth > 640 ? "16px" : "12px",
      },
      symbolHeight: 12,
    },
    credits: { enabled: false },
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
    responsive: {
      rules: [
        {
          condition: { maxWidth: 640 },
          chartOptions: {
            chart: { height: 300 },
            plotOptions: {
              bar: { dataLabels: { distance: 10, style: { fontSize: "12px" } } },
            },
            title: { style: { fontSize: "14px" } },
            legend: { itemStyle: { fontSize: "12px" } },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-4 sm:p-6 rounded-lg overflow-x-auto">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentsResidenceBar;