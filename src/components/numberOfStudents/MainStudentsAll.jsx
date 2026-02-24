import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const MainStudentsAll = ({ dashboardStudentLevelOfStudy }) => {
  const courses = [];
  const internal_count = [];
  const external_count = [];
  const master_count = [];
  const remote_count = [];
  const second_specialty_count = [];
  
  for (let i = 0; i < dashboardStudentLevelOfStudy?.length; i++) {
    courses.push(`${dashboardStudentLevelOfStudy[i].course}-kurs`);
    internal_count.push(dashboardStudentLevelOfStudy[i].internal_count);
    external_count.push(dashboardStudentLevelOfStudy[i].external_count);
    master_count.push(dashboardStudentLevelOfStudy[i].master_count);
    remote_count.push(dashboardStudentLevelOfStudy[i].remote_count);
    second_specialty_count.push(
      dashboardStudentLevelOfStudy[i].second_specialty_count
    );
  }
  const newData = [
    {
      name: "Kunduzgi ta'lim",
      data: internal_count,
      color: "#2CAFFEFF"
    },
    {
      name: "Sirtqi",
      data: external_count,
      color: "#50E3C2"
    },
    {
      name: "Masofaviy ta'lim",
      data: remote_count,
      color: "#F5A623"
    },
    {
      name: "Magistratura",
      data: master_count,
       color: "#544FC5FF"
    },
    {
      name: "Ikkinchi mutaxassislik",
      data: second_specialty_count,
      color: "#FF6B6BFF"
    },
  ];

  const options = {
    chart: {
      type: "column",
      height: "520px",
    },
    title: {
      text: `TALABALARNING UMUMIY KONTINGENTI: ${dashboardStudentLevelOfStudy?.reduce((sum, item) => sum + item.total_count, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: courses,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Talabalar soni",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: (Highcharts.theme && Highcharts.theme.textColor) || "#666",
        },
      },
    },
    legend: {
      align: "left",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "white",
      // borderColor: "#CCC",
      // borderWidth: 1,
      shadow: false,
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
        pointPadding: 0,
        borderWidth: 0,
        series: {
          borderRadius: 10,
        },
      },
    },

    series: newData
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MainStudentsAll;
