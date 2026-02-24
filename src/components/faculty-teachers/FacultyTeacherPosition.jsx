import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FacultyTeacherPosition = ({positions}) => {
  const male = [];
  const female = [];
  const position = [];
  

  for(let i = 0; i < positions?.length; i++){
    male.push(positions[i].male);
    female.push(positions[i].female);
    position.push(positions[i].position);
  }
  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: `PROFESSOR-O‘QITUVCHILARNING LAVOZIMI BO‘YICHA TAQSIMOTI: ${positions?.reduce((sum, item) => sum + item.count, 0)} nafar`,
      align: 'left', 
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
    xAxis: {
      categories: position,
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "PROFESSOR-O‘QITUVCHILAR SONI",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true,
        },
        pointWidth: 12, 
        pointPadding: 0.1,
        groupPadding: 0.2
      },
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      floating: false,
      backgroundColor: "#FFFFFF",
      shadow: false,
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Erkaklar",
        data: male,
        color: "#2CAFFEFF", 
      },
      {
        name: "Ayollar",
        data: female, 
        color: "#00E272FF",
      },
    ],
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FacultyTeacherPosition;
