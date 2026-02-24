import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RegionStudents = ({regionCourseData}) => {
  
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  for(let i = 0; i < regionCourseData?.length; i++){
    one.push(regionCourseData[i].course_1);
    two.push(regionCourseData[i].course_2);
    three.push(regionCourseData[i].course_3);
    four.push(regionCourseData[i].course_4);
  }
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `VILOYATLAR KESIMIDA TALABALAR SONI: ${regionCourseData?.reduce((sum, item) => sum + item.students, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        // textTransform: "uppercase",
      },
    },
    xAxis: {
      categories: [
        "Qoraqalpog'iston Respublikasi",
        "Andijon viloyati",
        "Buxoro viloyati",
        "Jizzax viloyati",
        "Qashqadaryo viloyati",
        "Navoiy viloyati",
        "Namangan viloyati",
        "Samarqand viloyati",
        "Surxondaryo viloyati",
        "Sirdaryo viloyati",
        "Toshkent viloyati",
        "Farg'ona viloyati",
        "Xorazm viloyati",
        "Toshkent shahar",
        "Xorijiy davlatlardan",
      ],
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
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} nafar</b></td></tr>',
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
        name: "1-kurs",
        data: one, 
      },
      {
        name: "2-kurs",
        data: two, 
      },
      {
        name: "3-kurs",
        data: three, 
      },
      {
        name: "4-kurs",
        data: four, 
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RegionStudents;
