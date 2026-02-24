const DepartNameCard = ({ item }) => {
  const { name, number, bg, color } = item;

  return (
    <div
      style={{ backgroundColor: bg, color: color }}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center rounded-[20px] p-6 sm:p-8 flex flex-col justify-between mb-4"
    >
      <h2
        style={{ color: color }}
        className="text-base sm:text-sm md:text-base font-medium mb-4 break-words"
      >
        {name}
      </h2>
      <div>
        <p
          style={{ color: color }}
          className="text-2xl sm:text-xl md:text-2xl leading-[1.2] font-semibold"
        >
          {number}
        </p>
        <p
          style={{ color: color }}
          className="text-sm sm:text-xs md:text-sm font-normal"
        >
          O‘QITUVCHILAR SONI
        </p>
      </div>
    </div>
  );
};

export default DepartNameCard;