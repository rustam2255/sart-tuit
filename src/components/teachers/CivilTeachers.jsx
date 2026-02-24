import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CivilTeachers = ({teacherGender}) => {
    
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `PROFESSOR-O‘QITUVCHILARNING JINSI BO‘YICHA SONI: ${teacherGender?.count} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      pointFormat:
        "Soni: <b>{point.y} ta</b></br>Foizda: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        borderWidth: 10,
        borderRadius: "30%",
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
          distance: -35,
        },
        showInLegend: true,
        allowPointSelect: true,
      },
    },

    series: [
      {
        name: "O'qituvchilar",
        colorByPoint: true,
        data: [
          {
            name: "Erkak",
            y: teacherGender?.male,
            color: "#23E274FF",
          },
          {
            name: "Ayol",
            y: teacherGender?.female,
            color: "#F5C26B",
            
          },
        ],
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "horizontal",
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

export default CivilTeachers;
