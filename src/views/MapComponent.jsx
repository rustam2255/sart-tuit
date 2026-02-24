import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import logoSrc from "public/img/logo.webp";
import { BuildingItem, BuildingList } from "../api/api";
import { useQuery } from "react-query";
import { Button } from "antd";
import tuit from "../assets/tuit.jpg";
import { useNavigate } from "react-router-dom";
// { nomi: "A BINO", koordinata: [41.341419, 69.287736] },

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const navigate = useNavigate();
  const id = currentLocation?.id || 0;
  const { data: buildingList } = useQuery(["BuildingList"], BuildingList, {
    onSuccess: (data) => {
      setCurrentLocation(data.data[0]);
    },
  });
  const { data: buildingItem } = useQuery(["BuildingItem", id], () =>
    BuildingItem(id)
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="
w-full lg:w-[300px] 
h-auto lg:h-full 
p-4 sm:p-5 
bg-[#f8f9fa] 
lg:rounded-[20px_15px_15px_20px]
rounded-b-2xl lg:rounded-b-none
">
        <div className="flex justify-between items-center mb-5 flex-col h-full">
          <div className="w-full">
            <div
              onClick={() => navigate("/")}
              className="mb-3 flex items-center gap-2 cursor-pointer"
            >
              <img
                src={logoSrc}
                alt="TUIT logo"
                className="w-[4.4rem] h-[4.4rem] object-fit object-center"
              />
              <div>
                <h3 className="font-medium text-lg">TUIT</h3>
                <p className="text-xs text-[#555]">
                  Toshkent axborot <br /> texnologiyalar universiteti
                </p>
              </div>
            </div>
            <h3 className="text-[#555]">Binolar</h3>
            <ul>
              {buildingList?.data.map((bino, index) => (
                <li
                  className={
                    currentLocation?.id === bino.id
                      ? "text-blue-600 text-base bg-blue-100 my-3 p-[10px_15px] cursor-pointer rounded-2xl"
                      : "my-3 p-[10px_15px] text-[#444] text-base cursor-pointer rounded-2xl"
                  }
                  key={index}
                  onClick={() => setCurrentLocation(bino)}
                >
                  <p className="uppercase font-medium">{bino.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <Button onClick={() => navigate("/")} className="w-full mt-10" type="primary">
              Asosiy sahifaga qaytish
            </Button>
          </div>
        </div>
      </div>

      <MapContainer
  center={[41.3407803, 69.2873812]}
  zoom={16}
  attributionControl={false}
  className="flex-1 h-[60vh] lg:h-full"
>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {currentLocation && (
          <Marker
            position={[currentLocation.latitude, currentLocation.longitude]}
          >
            <Popup>
              <h1 className="text-sm font-semibold mb-1 uppercase">
                {buildingItem?.data.name}
              </h1>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      {buildingItem && (
        <div className="
absolute 
top-auto lg:top-5
bottom-4 lg:bottom-auto
left-1/2 lg:left-[350px]
-translate-x-1/2 lg:translate-x-0
z-10
w-[90%] sm:w-[350px]
">
          <div className="w-full p-3 bg-white shadow-lg rounded-[15px] mb-3">
            <h2 className="font-bold text-lg mb-2 text-[#333] uppercase">
              {buildingItem.data.name}
            </h2>
            {buildingItem.data.building_attributes.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1 border-b last:border-none"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt="Attribute icon"
                    className="w-8 h-8"
                  />
                  <p className="font-medium text-[#444]">{item.attribute}</p>
                </div>
                <p className="font-semibold text-[#333]">{item.value}</p>
              </div>
            ))}
            <Button className="w-full mt-5" type="primary">
              Davom etish
            </Button>
          </div>
          <div className="w-[300px] p-3 bg-white shadow-lg rounded-[15px]">
            <div className="mb-3 rounded-[8px]">
              <img
                className="w-full rounded-[8px]"
                src={buildingItem.data.image ? buildingItem.data.image : tuit}
                alt=""
              />
            </div>
            <Button className="w-full" type="primary">
              <a
                href={buildingItem?.data.url360}
                rel="noopener noreferrer"
                target="_blank"
              >
                Virtual sayohat qilish
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
