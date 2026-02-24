import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import axiosT from "../api/axios";
// import img from "../../public/img/img.png";

const LoginPage = () => {
  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  // const submitHandler = () => {
  //   if (login.username === "tuit" && login.password === "rektor") {
  //     localStorage.setItem("tuit_token", true);

  //     messageApi.open({
  //       type: "info",
  //       content: "Tizimga muvaffaqqiyatli kirildi",
  //     });
  //     window.location.reload();
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //     messageApi.open({
  //       type: "error",
  //       content: "Username yoki parol xato kiritildi",
  //     });
  //   }
  // };
  const submitHandler = async () => {
    const login = getValues().LOGIN;

    axiosT
      .post("/accounts/Token", login)
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refresh_token);
        messageApi.open({
          type: "info",
          content: "Tizimga muvaffaqqiyatli kirildi",
        });
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);

        messageApi.open({
          type: "error",
          content: "Bunday login parol mavjud emas",
        });
      });

    // try {
    //   const response = await axiosInstance.post("/accounts/Token", login);
    //   const { access_token, refresh_token } = response.data;
    //   console.log(access_token, refresh_token);

    //   localStorage.setItem("accessToken", access_token);
    //   localStorage.setItem("refreshToken", refresh_token);

    //   messageApi.open({
    //     type: "info",
    //     content: "Tizimga muvaffaqqiyatli kirildi",
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.error(error);

    //   messageApi.open({
    //     type: "error",
    //     content: "Bunday login parol mavjud emas",
    //   });
    // }
  };
  return (
    <>
      {contextHolder}

      <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 bg-white">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl inter mb-8 sm:mb-10 md:mb-12 text-center">
          Tizimga kirish
        </h2>

        <Form
          layout="vertical"
          className="mb-10 w-full max-w-[380px] xs:max-w-[400px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px]"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
            <Form.Item className="" label="Username">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="LOGIN.username"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        placeholder="Username"
                        className="w-full py-3 sm:py-4 px-4 sm:px-5 rounded-[10px] text-base sm:text-lg"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item className="" label="Password">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="LOGIN.password"
                render={({ field }) => {
                  return (
                    <>
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="w-full py-3 sm:py-4 px-4 sm:px-5 rounded-[10px] text-base sm:text-lg"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>

            <button
              type="submit"
              className="w-full text-base sm:text-lg py-2 sm:py-3 text-white rounded-2xl bg-slate-800 cursor-pointer transition-opacity hover:opacity-85"
            >
              Kirish
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;