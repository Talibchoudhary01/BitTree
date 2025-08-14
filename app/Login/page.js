import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-white h-screen  grid grid-cols-2">
      <div className="flex   justify-center overflow-y-auto ">
        <div className="absolute left-1 top-9">
          <Link href="/">
            {" "}
            <Image
              className="mx-11 cursor-pointer h-6 w-39 "
              src="./linktreeimage.svg"
              alt="Profile picture"
            />
          </Link>
        </div>

        <div className="mt-[16vh] ">
          <h1 className="font-bold text-4xl font-sans ml-[16vw]">
            Welcome back
          </h1>
          <p className=" text-xl text-slate-700 ml-[18vw] mt-2">
            Login to your LinkTree
          </p>

          <div className=" mt-[10vh] ml-[6vw]">
            <input
              className="bg-slate-100 rounded-xl h-[8vh] text-slate-700 font-medium text-xl w-[36vw] "
              type="text"
              placeholder="Email or Username"
            />

            <button className="bg-slate-950 w-[36vw] h-[8vh] text-white  rounded-xl mt-3 cursor-pointer ">
              Continue
            </button>

            <h1 className="w-[36vw] h-[8vh] text-center mt-5 text-slate-700 font-semibold">
              OR
            </h1>

            <button className="w-[36vw] h-[8vh]  font-semibold flex justify-center items-center gap-3 rounded-xl border border-slate-800 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] "
                role="img"
                aria-hidden="false"
                aria-labelledby=":r5:_title "
              >
                <title id=":r5:_title">Google Brand</title>
                <path
                  fill="#4285F4"
                  d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
                ></path>
                <path
                  fill="#34A853"
                  d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51c-.9.6-2.04.95-3.39.95-2.6 0-4.8-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22Z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.06a10 10 0 0 0 0 9l3.34-2.6Z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.34 2.6c.8-2.36 3-4.12 5.6-4.12Z"
                ></path>
              </svg>
              Continue with Google
            </button>

            <button className="w-[36vw] h-[8vh] mt-3  font-semibold flex justify-center items-center gap-3 rounded-xl border border-slate-800 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] "
                role="img"
                aria-hidden="false"
                aria-labelledby=":r6:_title "
              >
                <title id=":r6:_title">Apple Brand</title>
                <path
                  d="M20.34 7.5c-.13.1-2.38 1.37-2.38 4.2a4.85 4.85 0 0 0 2.95 4.44c-.01.07-.45 1.58-1.51 3.12-.94 1.36-1.92 2.71-3.42 2.71s-1.88-.87-3.6-.87c-1.7 0-2.3.9-3.66.9-1.37 0-2.32-1.25-3.42-2.8A13.48 13.48 0 0 1 3 11.93c0-4.28 2.78-6.54 5.52-6.54 1.45 0 2.66.95 3.58.95.87 0 2.22-1.01 3.88-1.01.62 0 2.88.06 4.36 2.18Zm-5.15-4A4.91 4.91 0 0 0 16.36.45c0-.15-.01-.31-.04-.44a4.92 4.92 0 0 0-3.24 1.67 4.78 4.78 0 0 0-1.21 2.98c0 .17.03.34.04.4.07.01.19.03.3.03 1 0 2.26-.67 2.98-1.57Z"
                  fill="black"
                ></path>
              </svg>
              Continue with Apple
            </button>

            <button className="w-[36vw] h-[8vh] mt-3  font-semibold flex justify-center items-center gap-3 rounded-xl border border-slate-800 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="!w-[18px] !h-[18px]"
                style={{
                  display: "inline",
                  contentVisibility: "auto",
                }}
              >
                <g clipPath="url(#clip0_8227_24947)">
                  <path
                    id="Vector"
                    d="M5 3.75C5 3.35218 5.15804 2.97064 5.43934 2.68934C5.72064 2.40804 6.10218 2.25 6.5 2.25H12.5C12.8978 2.25 13.2794 2.40804 13.5607 2.68934C13.842 2.97064 14 3.35218 14 3.75V14.25C14 14.6478 13.842 15.0294 13.5607 15.3107C13.2794 15.592 12.8978 15.75 12.5 15.75H6.5C6.10218 15.75 5.72064 15.592 5.43934 15.3107C5.15804 15.0294 5 14.6478 5 14.25V3.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M8.75 3H10.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M9.5 12.75V12.7575"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_8227_24947">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              Continue with Phone number
            </button>

            <div className="w-[36vw] h-[8vh] mt-8 flex justify-center items-center gap-2 font-semibold text-[#8129D9] ">
              <h1>Forget Password ?</h1>
              <h1>Forget Username ?</h1>
            </div>

            <div className="w-[36vw] h-[8vh] mt-2 flex justify-center items-center gap-2 pb-[13vh] pt-[5vh] ">
              <h1 className="text-slate-700">Don't have an account ?</h1>
              <h1 className="text-[#8129D9]">Sign up</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full ">
        <Image 
          className="h-screen w-full"
          src="/bannerlogin.png"
          alt="Banner image"
        />
      </div>
    </div>
  );
};

export default Login;
