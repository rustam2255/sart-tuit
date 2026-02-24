import logo from "../../public/logo.png";

const LoginLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">

        <div className="hidden md:flex items-center justify-center md:bg-slate-800 h-screen md:w-[40%]">
          <h2 className="text-white text-5xl lg:text-6xl  font-bold">Smart TUIT</h2>
        </div>


        <div className="flex-1 flex flex-col items-center justify-start md:justify-center bg-white px-5 sm:px-8 md:px-0 pt-20 sm:pt-24 md:pt-0">

          

          <div className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[540px]">
            {children}
          </div>

        </div>
      </div>


      <div className="fixed flex gap-2 items-center z-10 bottom-4 right-4 sm:right-8 md:right-12 lg:right-16">
        <img className="w-12 sm:w-14 md:w-[55px]" src={logo} alt="Logo" />
      </div>
    </>
  );
};

export default LoginLayout;