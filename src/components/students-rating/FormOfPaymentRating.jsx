import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo, useContext } from "react";
import { FacultyContext } from "../../context/FacultyProvider";

const FormOfPaymentRating = () => {
  const { coursePaymentData } = useContext(FacultyContext);
  
  let grand = [];
  let contract = [];
  for (let i = 0; i < coursePaymentData?.courses?.length; i++) {
    grand.push(coursePaymentData?.courses[i].grand || 0);
    contract.push(coursePaymentData?.courses[i].contract || 0);
  }
  const options = {
    chart: {
      type: "column",
      height: "490px",
    },

    title: {
      text: `TO‘LOV SHAKLI TAQSIMOTI: ${coursePaymentData?.students || 0} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: ["1-kurs", "2-kurs", "3-kurs", "4-kurs"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size:14px;margin-bottom:5px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>&nbsp; {point.y} ta</b></td></tr>',
      footerFormat: "</table>",
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
          format: "{point.y}",
          style: {
            fontSize: "16px",
            // fontWeight: "bold",
          },
          distance: 60,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: `To‘lov shartnoma: ${contract?.reduce(
          (sum, item) => sum + item,
          0
        )}`,
        data: contract,
        color: "rgba(139, 92, 246, 1)",
      },
      {
        name: `Davlat granti: ${grand?.reduce(
          (sum, item) => sum + item,
          0
        )}`,
        data: grand,
        color: "#FF6B6BFF",
      },
    ],
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
  };

  return (
    <div className="border-[1px] border-[rgba(232, 232, 232, 1)] p-6 rounded-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default memo(FormOfPaymentRating);
