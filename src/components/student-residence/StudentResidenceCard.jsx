const StudentsResidenceCard = ({
  info,
  numbers,
  colorBold,
  colorLight,
}) => {
  return (
    <>
      <div
        className={`dashboard__statistics-card  rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
        style={{ backgroundColor: colorLight }}
      >
        <div className="flex items-center gap-4">
          <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
          <i style={{color: colorBold}} className="fa-solid fa-building-user text-xl"></i>
          </div>
          <p style={{color: colorBold}} className="inter font-[600] text-[1.5rem] leading-[2rem]">
            {info}
          </p>
        </div>
        <p style={{ color: colorBold }} className="numbers mt-8 text-5xl font-[600]">{numbers} <span className="text-4xl">nafar</span></p>
        {/* <div
          className={`numbers mt-8 text-[3rem] font-[600]`}
          
          dangerouslySetInnerHTML={{ __html: numbers }}
        ></div> */}
      </div>
    </>
  );
};

export default StudentsResidenceCard;
