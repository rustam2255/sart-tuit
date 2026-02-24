import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const FacultyPieChart = ({academicDegree}) => {
  console.log(academicDegree);
  
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: `ILMIY DARAJALI PROFESSOR-O‘QITUVCHILAR: ${academicDegree?.all} nafar`,
      align: 'left', 
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      pointFormat: 'Foizda: <b>{point.percentage:.1f}%</b></br>Soni: <b>{point.y} ta</b>',
    },
    plotOptions: {
      pie: {
        cursor: "pointer",
        borderRadius: "8%",
        borderWidth: 5,
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "18px",
            fontWeight: "bold",
          },
          distance: 20,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        minPointSize: 70,
        innerSize: "50%",
        zMin: 0,
        name: "O'qituvchilar",
        colorByPoint: true,
        data: [
          {
            name: 'Fan doktori (DSc)',
            y: (academicDegree?.doctor), 
            color: 'rgba(24, 213, 77, 1)',
          },
          {
            name: 'Fan Nomzodi (PhD)',
            y: (academicDegree?.candidate), 
            color: 'rgba(255, 79, 68, 1)', 
          },
        ],
      },
    ],
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      itemStyle: {
        fontWeight: "600",
        fontSize: "15px",
      },
    },
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg relative'>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="absolute bottom-5 right-5">
        <p className="text-[#505050] font-bold text-xl">Ilmiy saloyihati: {academicDegree?.potensial}%</p>
      </div>
    </div>
  );
};

export default FacultyPieChart;
