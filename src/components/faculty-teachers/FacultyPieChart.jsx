import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const FacultyPieChart = ({ academicDegree }) => {
  const options = {
    chart: {
      type: 'pie',
      height: 400, // default desktop
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
          allowOverlap: false,
          formatter() {
            // Desktopda ko‘rsatadi, mobilda null
            return window.innerWidth > 640 ? this.point.y : null;
          },
          style: {
            fontSize: window.innerWidth > 640 ? "18px" : "12px",
            fontWeight: "bold",
            color: "white",
          },
          distance: window.innerWidth > 640 ? 20 : 10,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        minPointSize: 70,
        innerSize: window.innerWidth > 640 ? "50%" : "40%",
        zMin: 0,
        name: "O'qituvchilar",
        colorByPoint: true,
        data: [
          {
            name: 'Fan doktori (DSc)',
            y: academicDegree?.doctor,
            color: 'rgba(24, 213, 77, 1)',
          },
          {
            name: 'Fan Nomzodi (PhD)',
            y: academicDegree?.candidate,
            color: 'rgba(255, 79, 68, 1)',
          },
        ],
      },
    ],
    legend: {
      align: window.innerWidth > 640 ? 'right' : 'center',
      verticalAlign: window.innerWidth > 640 ? 'middle' : 'bottom',
      layout: window.innerWidth > 640 ? 'vertical' : 'horizontal',
      itemStyle: {
        fontWeight: "600",
        fontSize: window.innerWidth > 640 ? "15px" : "12px",
      },
    },
    responsive: {
      rules: [
        {
          condition: { maxWidth: 640 },
          chartOptions: {
            chart: { height: 350 },
            title: { style: { fontSize: '13px' } },
            plotOptions: {
              pie: { dataLabels: { distance: 10, style: { fontSize: '12px' } } },
            },
            legend: { itemStyle: { fontSize: '12px' } },
          },
        },
      ],
    },
  };

  return (
    <div className='border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg relative overflow-x-auto'>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="absolute bottom-5 right-5">
        <p className="text-[#505050] font-bold text-xl">
          Ilmiy saloyihati: {academicDegree?.potensial}%
        </p>
      </div>
    </div>
  );
};

export default FacultyPieChart;