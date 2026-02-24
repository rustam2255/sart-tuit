import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataUzbekistan from "@highcharts/map-collection/countries/uz/uz-all.geo.json";
import HC_map from "highcharts/modules/map";
import axios from "axios";

HC_map(Highcharts);

// const data = [
//   ['uz-fa', 10], ['uz-tk', 11], ['uz-an', 12], ['uz-ng', 13],
//   ['uz-ji', 14], ['uz-si', 15], ['uz-ta', 16], ['uz-bu', 17],
//   ['uz-kh', 18], ['uz-qr', 19], ['uz-nw', 20], ['uz-sa', 21],
//   ['uz-qa', 22], ['uz-su', 23]
// ];

// const data = [
//   { "hc-key": "uz-fa", value1: 120, value2: 39, color: "#FF5733", names: "Farg'ona" }, // Farg'ona
//   { "hc-key": "uz-tk", value1: 180, value2: 69, color: "#33FF57", names: "Toshkent shahar" }, // Toshkent shahar
//   { "hc-key": "uz-an", value1: 45, value2: 31, color: "#3357FF", names: "Andijon" }, // Andijon
//   { "hc-key": "uz-ng", value1: 70, value2: 46, color: "#FF33A5", names: "Namangan" }, // Namangan
//   { "hc-key": "uz-ji", value1: 70, value2: 46, color: "#FF8C33", names: "Jizzax" }, // Jizzax
//   { "hc-key": "uz-si", value1: 20, value2: 21, color: "#FFC300", names: "Sirdaryo" }, // Sirdaryo
//   { "hc-key": "uz-ta", value1: 151, value2: 82, color: "#DAF7A6", names: "Toshkent vil." }, // Toshkent vil.
//   { "hc-key": "uz-bu", value1: 100, value2: 53, color: "#900C3F", names: "Buxoro" }, // Buxoro
//   { "hc-key": "uz-kh", value1: 24, value2: 20, color: "#581845", names: "Xorazm" }, // Xorazm
//   { "hc-key": "uz-qr", value1: 60, value2: 38, color: "#C70039", names: "Qoraqalpog'iston" }, // Qoraqalpog'iston
//   { "hc-key": "uz-nw", value1: 60, value2: 56, color: "#FFC300", names: "Navoiy" }, // Navoiy
//   { "hc-key": "uz-sa", value1: 60, value2: 31, color: "#FF5733", names: "Samarqand" }, // Samarqand
//   { "hc-key": "uz-qa", value1: 120, value2: 45, color: "#C70039", names: "Qashqadaryo" }, // Qashqadaryo
//   { "hc-key": "uz-su", value1: 80, value2: 36, color: "#581845", names: "Surxondaryo" }, // Surxondaryo
// ];
let data = [
  {
    "hc-key": "uz-qr",
    id: "1735",
    value1: 60,
    value2: 38,
    color: "#C70039",
    names: "Qoraqalpog'iston",
  }, // Qoraqalpog'iston
  {
    "hc-key": "uz-an",
    id: "1703",
    value1: 45,
    value2: 31,
    color: "#3357FF",
    names: "Andijon",
  }, // Andijon
  {
    "hc-key": "uz-bu",
    id: "1706",
    value1: 100,
    value2: 53,
    color: "#900C3F",
    names: "Buxoro",
  }, // Buxoro
  {
    "hc-key": "uz-ji",
    id: "1708",
    value1: 70,
    value2: 46,
    color: "#FF8C33",
    names: "Jizzax",
  }, // Jizzax
  {
    "hc-key": "uz-qa",
    id: "1710",
    value1: 120,
    value2: 45,
    color: "#C70039",
    names: "Qashqadaryo",
  }, // Qashqadaryo
  {
    "hc-key": "uz-nw",
    id: "1712",
    value1: 60,
    value2: 56,
    color: "#FFC300",
    names: "Navoiy",
  }, // Navoiy
  {
    "hc-key": "uz-ng",
    id: "1714",
    value1: 70,
    value2: 46,
    color: "#FF33A5",
    names: "Namangan",
  }, // Namangan
  {
    "hc-key": "uz-sa",
    id: "1718",
    value1: 60,
    value2: 31,
    color: "#FF5733",
    names: "Samarqand",
  }, // Samarqand
  {
    "hc-key": "uz-su",
    id: "1722",
    value1: 80,
    value2: 36,
    color: "#581845",
    names: "Surxondaryo",
  }, // Surxondaryo
  {
    "hc-key": "uz-si",
    id: "1724",
    value1: 20,
    value2: 21,
    color: "#FFC300",
    names: "Sirdaryo",
  }, // Sirdaryo
  {
    "hc-key": "uz-ta",
    id: "1727",
    value1: 151,
    value2: 82,
    color: "#DAF7A6",
    names: "Toshkent vil.",
  }, // Toshkent vil.
  {
    "hc-key": "uz-fa",
    id: "1730",
    value1: 120,
    value2: 39,
    color: "#FF5733",
    names: "Farg'ona",
  }, // Farg'ona
  {
    "hc-key": "uz-kh",
    id: "1733",
    value1: 24,
    value2: 20,
    color: "#581845",
    names: "Xorazm",
  }, // Xorazm
  {
    "hc-key": "uz-tk",
    id: "1726",
    value1: 180,
    value2: 69,
    color: "#33FF57",
    names: "Toshkent shahar",
  }, // Toshkent shahar
];
const MapRating = ({ regionGenderCountData }) => {
  const newFaculties = data.map((item) => {
    const matchingItem = regionGenderCountData.find(
      (element) => element.code == item.id
    );

    if (matchingItem) {
      return {
        ...item,
        value1: matchingItem.male,
        value2: matchingItem.female,
        value3: matchingItem.students,
        names: matchingItem.name || item.names,
        color: matchingItem.color || item.color,
      };
    }

    return item;
  });
  const getChartHeight = () => {
    if (window.innerWidth < 640) return 400;
    if (window.innerWidth < 1024) return 600;
    return 850;
  };

  const [options, setOptions] = useState({
    chart: {
      map: "countries/uz/uz-all",
      height: getChartHeight(),
    },
    title: {
      text: `TALABALARNING VILOYATLAR KESIMIDA SONI: ${regionGenderCountData?.reduce((sum, item) => sum + item.students, 0)} nafar`,
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      formatter: function () {
        return `
      <b style="color: #000; font-size: 14px;padding-bottom: 10px">${this.point.names}</b><br/>
      <span style="color: #000;">Barcha talabalar:</span> 
      <span style="color: #000;  ">${this.point.value3}</span><br/>
      <span style="color: #3357FF;">O‘g‘il talabalar:</span> 
      <span style="color: #3357FF;  ">${this.point.value1}</span><br/>
      <span style="color: #f00;">Qiz talabalar:</span> 
      <span style="color: #f00;">${this.point.value2}</span>`;
      },
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        data: newFaculties,
        mapData: mapDataUzbekistan,
        joinBy: "hc-key",
        name: "O'zbekiston",
        states: {
          hover: {
            // color: "#BADA55",
            // opacity: 0.5,
            enabled: false,
            // transform: "scale(1.5)"
          },
        },
        // point: {
        //   events: {
        //     mouseOver: function () {
        //       this?.update({ opacity: 0.5 }); // Faqat ushbu viloyat uchun opacity o'zgaradi
        //     },
        //     mouseOut: function () {
        //       this?.update({ opacity: 1 }); // Hoverdan chiqishda opacity qayta tiklanadi
        //     }
        //   }
        // },
        point: {
          events: {
            mouseOver: function () {
              this.graphic.attr({
                transform: "scale(1.01)",
                opacity: 0.5,
              });
            },
            mouseOut: function () {
              this.graphic.attr({
                transform: "scale(1)",
                opacity: 1,
              });
            },
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
  });

  useEffect(() => {
    axios
      .get("https://code.highcharts.com/mapdata/countries/uz/uz-all.topo.json")
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);

        throw new Error("Something error");
      });
  }, []);

  return (
    <div className="border border-gray-200 p-4 sm:p-6 rounded-lg w-full overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"}
            options={options}
            containerProps={{ style: { width: "100%" } }}
          />
        </div>
      </div>
    </div>
  );
};

export default MapRating;
