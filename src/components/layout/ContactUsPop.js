"use client";

import Drawer from "../Drawer";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";

const ContactUsPop = ({ projectConfig }) => {
  const [openPop, setOpenPop] = useState(false);
  const handleToggle = () => setOpenPop((prev) => !prev);

  // const [captchaData, setCaptchaData] = useState("");
  // const [captchaError, setCaptchaError] = useState("");
  // const captchaRef = useRef(null);
  // const handleCaptchaChange = () => {
  //   const token = captchaRef.current.getValue();
  //   if (token) {
  //     setCaptchaData(token);
  //   }
  // };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const SubmitContact = async (data) => {
    const formData = new FormData();
    formData.append("NameFirst", data.name);
    formData.append("Email", data.email);
    formData.append("Phone", data.phone);
    formData.append("Message", data.message);
    formData.append("Subject", "Contact Form");
    // formData.append("Captcha", captchaData);

    try {
      const res = await fetch(`${location.origin}/api/contact`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.hasError) {
        toast.error(data?.message);
        // console.log(data?.message);
        return;
      } else {
        // console.log(data.message);
        toast.success(data.message);
        setOpenPop(false);
        // reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setCaptchaError("");
    }

    // if (captchaData) {
    //   const formData = new FormData();
    //   formData.append("NameFirst", data.userName);
    //   formData.append("Email", data.email);
    //   formData.append("Phone", data.phone);
    //   formData.append("Message", data.message);
    //   formData.append("Subject", "Contact Form");
    //   formData.append("Captcha", captchaData);

    //   try {
    //     const res = await fetch(`${location.origin}/api/contact`, {
    //       method: "POST",
    //       body: formData,
    //     });
    //     const data = await res.json();

    //     if (data.hasError) {
    //       toast.error(data?.message);
    //       return;
    //     } else {
    //       console.log(data.message);
    //       toast.success(data.message);
    //       reset();
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setCaptchaError("");
    //   }
    // } else {
    //   setCaptchaError("This feild is required");
    // }
  };

  return (
    <>
      <button
        className="bg-white text-[#001d35] font-bold rounded-full p-3 px-7 text-base mb-6 border-white border-2 transition-all hover:bg-transparent hover:text-white"
        onClick={handleToggle}
      >
        Contact Us
      </button>
      <Drawer
        placement="bottom"
        open={openPop}
        onClose={handleToggle}
        size="110vh"
        className="!bg-transparent"
      >
        <div
          onClick={handleToggle}
          className="absolute w-full h-full !bg-white/70"
        ></div>
        <div className="overflow-y-auto relative flex justify-center flex-row-reverse">
          <button
            type="button"
            className="absolute right-5 md:right-1/4 top-2 rounded-full p-2.5 text-[#022441] bg-white "
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 512 512"
            >
              <g>
                <g data-name="02 User">
                  <path
                    d="M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z"
                    fill="#022441"
                    opacity="1"
                    data-original="#022441"
                  ></path>
                  <path
                    d="M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z"
                    fill="#022441"
                    opacity="1"
                    data-original="#022441"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          <div className="pt-10 flex justify-center">
            <div className="w-full md:w-[500px] bg-[#eaeaea] p-11 flex flex-col gap-3 rounded-xl">
              <h3 className="text-[#001d35] text-2xl font-bold w-full text-center">
                Contact Us
              </h3>
              <form onSubmit={handleSubmit(SubmitContact)}>
                <div className="mb-2">
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm pl-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "The email is invalid",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm pl-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please enter your phone",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "The phone is invalid",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm pl-1">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <textarea
                    type="text"
                    className="py-3 px-4 block w-full border-gray-400 text-[#001d35] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Message"
                    {...register("message")}
                  />
                </div>
                {/* {projectConfig.CaptchaClientKey && (
                  <div className="mb-6">
                    <ReCAPTCHA
                      sitekey={projectConfig?.CaptchaClientKey}
                      stoken={projectConfig?.CaptchaSecretKey}
                      ref={captchaRef}
                      onChange={handleCaptchaChange}
                    />
                    {captchaError && (
                      <span className="text-red-500">{captchaError}</span>
                    )}
                  </div>
                )} */}
                <div className="mb-2 text-center">
                  <button
                    className="bg-[#001d35] text-white w-48 m-auto mt-4 font-bold rounded-full p-3 px-7 text-base mb-6 border-[#001d35] border-2 transition-all hover:bg-transparent hover:text-[#001d35]"
                    // onClick={handleToggle}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ContactUsPop;
