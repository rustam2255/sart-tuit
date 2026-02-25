import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AllCoursesStudents = ({ courseGropsData }) => {
  let uzbek = [];
  let rusian = [];
  for (let i = 0; i < courseGropsData?.courses.length; i++) {
    uzbek.push(courseGropsData?.courses[i].uzbek);
    rusian.push(courseGropsData?.courses[i].rusian);
  }

  const options = {
    chart: {
      type: 'column',
      height: window.innerWidth > 640 ? "60%" : 350,
    },
    title: {
      text: `TA'LIM TILI BO‘YICHA AKADEMIK GURUHLAR SONI: ${courseGropsData?.all_groups}`,
      align: 'left',
      style: {
        fontSize: window.innerWidth > 640 ? '16px' : '14px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: ['1-kurs', '2-kurs', '3-kurs', '4-kurs'],
      crosshair: true,
      labels: {
        style: {
          fontSize: window.innerWidth > 640 ? '14px' : '12px',
        },
      },
    },
    yAxis: {
      min: 0,
      title: { text: '' },
      labels: {
        style: {
          fontSize: window.innerWidth > 640 ? '14px' : '12px',
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:14px;margin-bottom:5px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>&nbsp; {point.y} ta</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        cursor: "pointer",
        borderRadius: "15%",
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          formatter() {
            // faqat desktopda ko‘rsatadi, mobilda null
            return window.innerWidth > 640 ? this.point.y : null;
          },
          style: {
            fontSize: window.innerWidth > 640 ? "16px" : "12px",
            fontWeight: "bold",
          },
          distance: window.innerWidth > 640 ? 60 : 30,
          allowOverlap: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "O'ZBEK",
        data: uzbek,
        color: '#FF8C33FF',
      },
      {
        name: "RUS",
        data: rusian,
        color: '#8DA399FF',
      },
    ],
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
    responsive: {
      rules: [
        {
          condition: { maxWidth: 640 },
          chartOptions: {
            chart: { height: 300 },
            plotOptions: {
              column: { dataLabels: { distance: 20, style: { fontSize: '12px' } } },
            },
            title: { style: { fontSize: '14px' } },
            legend: { itemStyle: { fontSize: '12px' } },
          },
        },
      ],
    },
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-4 sm:p-6 rounded-lg overflow-x-auto'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default AllCoursesStudents;