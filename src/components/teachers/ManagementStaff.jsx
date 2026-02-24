import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ManagementStaff = ({ teacherPolitics }) => {
  let sum = teacherPolitics?.hourly + teacherPolitics?.external_adjunct + teacherPolitics?.internal_adjunct + teacherPolitics?.internal_main + teacherPolitics?.full;
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `UMUMIY PROFESSOR-O‘QITUVCHILAR SONI: ${sum} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        // textTransform: "uppercase"
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
        innerSize: "40%",
        borderWidth: 1,
        borderRadius: "10%",
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
          distance: 15,
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
            name: "Asosiy shtatdagi o‘qituvchilar soni",
            y: teacherPolitics?.full,
          },
          {
            name: "O‘rindosh(ichki asosiy) o‘qituvchilar soni",
            y: teacherPolitics?.internal_main,
          },
          {
            name: "O‘rindosh(ichki qo‘shimcha) o‘qituvchilar soni",
            y: teacherPolitics?.internal_adjunct,
          },
          {
            name: "O‘rindosh(tashqi) o‘qituvchilar soni",
            y: teacherPolitics?.external_adjunct,
          },
          {
            name: "Soatbay o‘qituvchilar soni",
            y: teacherPolitics?.hourly,
          },
        ],
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        // fontWeight: "bold",
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ManagementStaff;
