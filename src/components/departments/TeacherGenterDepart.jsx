import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import VariablePie from "highcharts/modules/variable-pie";

VariablePie(Highcharts);

const TeacherGenterDepart = ({ teachersEmploymentGenders }) => {
  const data = [
    {
      name: "ERKAK",
      y: teachersEmploymentGenders?.male_teachers_count,
      z: 300,
      color: "#079ED6FF",
    },
    {
      name: "AYOL",
      y: teachersEmploymentGenders?.female_teachers_count,
      z: 300,
      color: "#BCE215FF",
    },
  ];

  const options = {
    chart: {
      type: "variablepie",
      height: "40%", // desktop saqlanadi
    },
    title: {
      text: `KAFEDRA PROFESSOR-O'QITUVCHILAR JISNI BO'YICHA SONI: ${teachersEmploymentGenders?.teachers_count} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      headerFormat: "",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        "Soni: <b>{point.y}</b><br/>" +
        "Foizi: <b>{point.percentage:.1f}%</b><br/>",
    },
    series: [
      {
        minPointSize: 10,
        innerSize: "20%",
        zMin: 0,
        name: "teachers",
        data: data,
      },
    ],
    plotOptions: {
      variablepie: {
        cursor: "pointer",
        borderRadius: "8%",
        borderWidth: 8,
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
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "bold",
        fontSize: "16px",
      },
      symbolHeight: 12,
    },

    // 🔹 Mobile uchun responsive
    responsive: {
      rules: [
        {
          condition: { maxWidth: 640 },
          chartOptions: {
            chart: {
              height: 360, // mobile uchun kattaroq
              spacingLeft: 10,
              spacingRight: 10,
            },
            title: {
              style: { fontSize: "14px" },
            },
            plotOptions: {
              variablepie: {
                innerSize: "30%",
                minPointSize: 20,
                dataLabels: {
                  style: {
                    fontSize: "12px",
                    fontWeight: "bold",
                  },
                  distance: 10,
                },
              },
            },
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              itemStyle: { fontSize: "12px" },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="border-[1px] border-[rgba(232,232,232,1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TeacherGenterDepart;