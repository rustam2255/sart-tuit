import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AcademicTeacher = ({ teacherPosition }) => {
  const male = [];
  const female = [];
  const position = [];
  
  for (let i = 0; i < teacherPosition?.length; i++) {
    male.push(teacherPosition[i].male);
    female.push(teacherPosition[i].female);
    position.push(teacherPosition[i].position);
  }

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `ASOSIY SHTATDAGI PROFESSOR-O'QITUVCHILARNING JINSI BO'YICHA SONI: ${teacherPosition?.reduce((sum, item) => sum + item.count, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
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
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>', //{point.y:.1f}
      footerFormat: "</table>",
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
        name: "Erkak",
        data: male, // Example data for women in each category
        color: "#00A651", // Green color
      },
      {
        name: "Ayol",
        data: female, // Example data for men in each category
        color: "#F8BC35", // Yellow/Orange color
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AcademicTeacher;
