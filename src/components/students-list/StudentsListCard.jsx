import { Descriptions } from "antd";
import "./students-list.css";
const StudentsListCard = ({ item }) => {

  const { award_name, full_name, group_name, image, speciality_name } = item;
  return (
    <div className="py-6 px-8 border-[rgba(30, 30, 30, 0.1)] border-[1px] rounded-[11px] text-center h-full flex flex-col justify-between">
      <div>
        <div className="w-full">
          <img
            className="mx-auto w-[80%] aspect-[2/2] object-contain mb-[20px]"
            src={image}
          />
        </div>
        <h3 className="text-[#666] text-sm font-normal mb-[10px]">
          {award_name}
        </h3>
        <h3 className="text-[rgba(30, 30, 30, 0.8)] text-base font-semibold mb-[10px]">
          {speciality_name}
        </h3>
        <p className="mb-[30px] text-base font-medium text-[#2469FF]">
          {full_name}
        </p>
      </div>
      <Descriptions bordered size="small" style={{ borderRadius: 8 }}>
        <Descriptions.Item label="Guruhi">{group_name}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default StudentsListCard;
