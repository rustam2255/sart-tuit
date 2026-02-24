import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CertificateOfTeachers = ({ departmentCertificates }) => {
  const departments = [];
  const lang_certificate = [];
  const it_certificate = [];
  for (let i = 0; i < departmentCertificates?.length; i++) {
    departments.push(departmentCertificates[i].department_name);
    lang_certificate.push(departmentCertificates[i].lang_certificate);
    it_certificate.push(departmentCertificates[i].it_certificate);
  }
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `PROFESSOR-O‘QITUVCHILARNING SERTIFIKATLARI BO‘YICHA TAQSIMOTI: ${departmentCertificates?.reduce(
        (sum, item) => sum + item.total,
        0
      )} nafar`,
      align: "left",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: departments,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: (Highcharts.theme && Highcharts.theme.textColor) || "#666",
        },
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
    series: [
      {
        name: "Xorijiy til sertifikatlari",
        data: lang_certificate,
        color: "#A105C44D",
      },
      {
        name: "IT sertifikatlari",
        data: it_certificate,
        color: "#A105C4",
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

export default CertificateOfTeachers;
