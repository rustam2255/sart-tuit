import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BusyStudentsInfo2 = ({ courseGenderEmp }) => {
  
  const male_students = [];
  const female_students = [];

  for (let i = 0; i < courseGenderEmp?.length; i++) {
    male_students.push(courseGenderEmp[i].male_students);
    female_students.push(courseGenderEmp[i].female_students);
  }

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: `TALABALARNING BANDLIGI HAQIDA MA’LUMOT: ${courseGenderEmp?.reduce((sum, item) => sum + item.students, 0)} nafar`,
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: ['1-kurs', '2-kurs', '3-kurs', '4-kurs'],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
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
    series: [
      {
        name: "O‘g‘il talabalar",
        data: male_students,
        color: '#00E272FF',
      },
      {
        name: "Qiz talabalar",
        data: female_students,
        color: '#BCE215FF',
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12,
    },

    // ======== RESPONSIVE SETTINGS ========
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 480, // mobil ekranlar uchun
          },
          chartOptions: {
            title: {
              style: {
                fontSize: '14px', // mobilga title kichraytirildi
              },
            },
            plotOptions: {
              column: {
                dataLabels: {
                  distance: 30, // label masofasi qisqarildi
                  style: {
                    fontSize: '12px',
                  },
                },
                pointPadding: 0.05,
              },
            },
            legend: {
              itemStyle: {
                fontSize: '12px', // legend fonti kichraytirildi
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-4 sm:p-6 rounded-lg'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BusyStudentsInfo2;