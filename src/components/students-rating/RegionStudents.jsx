import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RegionStudents = ({ regionCourseData }) => {
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  for (let i = 0; i < regionCourseData?.length; i++) {
    one.push(regionCourseData[i].course_1);
    two.push(regionCourseData[i].course_2);
    three.push(regionCourseData[i].course_3);
    four.push(regionCourseData[i].course_4);
  }

  const options = {
    chart: {
      type: "column",
      height: window.innerWidth > 640 ? "60%" : 450, // mobilga moslash
    },
    title: {
      text: `VILOYATLAR KESIMIDA TALABALAR SONI: ${regionCourseData?.reduce(
        (sum, item) => sum + item.students,
        0
      )} nafar`,
      align: "left",
      style: {
        fontSize: window.innerWidth > 640 ? "18px" : "14px",
        fontWeight: "bold",
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
      labels: {
        style: {
          fontSize: window.innerWidth > 640 ? "14px" : "10px",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
        style: {
          fontWeight: "bold",
          fontSize: window.innerWidth > 640 ? "14px" : "12px",
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
        pointWidth: window.innerWidth > 640 ? undefined : 12, // mobilda torroq
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
          distance: window.innerWidth > 640 ? 60 : 10,
        },
      },
    },
    legend: {
      layout: window.innerWidth > 640 ? "horizontal" : "horizontal",
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: window.innerWidth > 640 ? "16px" : "12px",
      },
      symbolHeight: 12,
    },
    series: [
      { name: "1-kurs", data: one },
      { name: "2-kurs", data: two },
      { name: "3-kurs", data: three },
      { name: "4-kurs", data: four },
    ],
    responsive: {
      rules: [
        {
          condition: { maxWidth: 640 },
          chartOptions: {
            chart: { height: 400 },
            plotOptions: {
              column: { dataLabels: { distance: 10, style: { fontSize: "12px" } } },
            },
            title: { style: { fontSize: "14px" } },
            legend: { itemStyle: { fontSize: "12px" } },
            xAxis: {
              labels: { style: { fontSize: "10px" } },
            },
            yAxis: { labels: { style: { fontSize: "10px" } } },
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

export default RegionStudents;