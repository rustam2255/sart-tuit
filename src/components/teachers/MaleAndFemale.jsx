import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MaleAndFemale = ({ teacherAcademicDegree }) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: `UNIVERSITET PROFESSOR-O‘QITUVCHILARINING ILMIY SALOHIYATI`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
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
        innerSize: "55%",
        borderWidth: 5,
        cursor: "pointer",
        borderRadius: "30%",
        dataLabels: {
          enabled: true,
          format: "{point.y}",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
          distance: -30,
        },
        showInLegend: true,
        allowPointSelect: true,
        // dataLabels: {
        //     enabled: true,
        //     format: '<span style="font-size: 1.2em"><b>{point.name}</b>' +
        //         '</span><br>' +
        //         '<span style="opacity: 0.6">{point.percentage:.1f} ' +
        //         '%</span>',
        //     connectorColor: 'rgba(128,128,128,0.5)'
        // }
      },
    },

    series: [
      {
        name: "O'qituvchilar",
        colorByPoint: true,
        data: [
          {
            name: `PhD: ${teacherAcademicDegree?.candidate_of_science} nafar`,
            y: teacherAcademicDegree?.candidate_of_science,
            color: "#3498db",
          },
          {
            name: `DSc: ${teacherAcademicDegree?.doctor_of_science} nafar`,
            y: teacherAcademicDegree?.doctor_of_science,
            color: "rgba(255, 79, 68, 1)",
          },
        ],
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      layout: "horizontal",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg relative">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className="flex justify-between">
        <p className="text-[#505050] font-bold text-[17px] uppercase">
          Jami: {teacherAcademicDegree?.all_teachers} <span className="lowercase">nafar</span>
        </p>
        <p className="text-[#505050] font-bold text-[17px] uppercase">
          Ilmiy salohiyati: {teacherAcademicDegree?.potensial}%
        </p>
      </div>
    </div>
  );
};

export default MaleAndFemale;
