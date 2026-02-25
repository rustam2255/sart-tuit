import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);

const GiftedStudentsPie = ({ allAwardsGender }) => {

  const data = [
    { name: "O‘g‘il talabalar", y: allAwardsGender?.length ? allAwardsGender[0].male_students : 0, z: 150, color: "#ff6b6b" },
    { name: "Qiz talabalar", y: allAwardsGender?.length ? allAwardsGender[0].female_students : 0, z: 150, color: "#ffe66d" },
  ];

  const options = {
    chart: {
      type: "variablepie",
    },
    title: {
      text: `IQTIDORLI TALABALARNING JINSI BO‘YICHA TAQSIMOTI: ${allAwardsGender[0]?.students || 0} nafar`,
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizda: <b>{point.percentage:.1f}%</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "45%",
        zMin: 0,
        name: "students",
        data: data,
      },
    ],
    plotOptions: {
      variablepie: {
        borderRadius: '30%',
        dataLabels: {
          enabled: true,
          format: "{y}",
          distance: 40,
          style: {
            fontWeight: "bold",
            color: "#333",
            fontSize: "18px",
          },
        },
        borderWidth: 7,
        cursor: 'pointer',
        innerSize: '60%',
        showInLegend: true,
      },
    },
    legend: {
      align: "left",
      layout: "vertical",
      labelFormatter: function () {
        return this.name + " - " + this.y;
      },
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
                fontSize: '14px', // title kichraytirildi
              },
            },
            plotOptions: {
              variablepie: {
                dataLabels: {
                  distance: 20, // labellarni chartga yaqinlashtirish
                  style: {
                    fontSize: '14px',
                  },
                },
                innerSize: '50%', // ichki radiusni kamaytirish
                borderWidth: 5,
              },
            },
            legend: {
              itemStyle: {
                fontSize: '14px', // legend kichraytirildi
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-4 sm:p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GiftedStudentsPie;