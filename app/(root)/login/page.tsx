import Image from "next/image";
import classImage from "@/public/login_background.jpg";
import { signIn } from "next-auth/react";
const Page = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-red-500">
      <div className="relative flex w-3/4 h-3/4 bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="w-1/2 relative">
          <Image
            src={classImage}
            alt="background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-white z-10 flex-col gap-6 p-8">
          <div className="text-black text-2xl font-semibold text-center">
            <h1 className="text-5xl sm:text-5xl mb-3 text-red-600">WELCOME</h1>
            <p className="mb-3 text-sm sm:text-base md:text-lg lg:text-xl">
              Boost your studies with
              <span className="text-red-600 font-bold"> BRILLA </span>, the
              ultimate Q&A platform for university students. Ask, share, and
              connect with a community ready to help you excel in any subject.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              ✨ Login now and light up your learning with
              <span className="text-red-600 font-bold"> BRILLA </span>
              experience today!
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <form
              action={async () => {
                "use server";
                await signIn("google", { callbackUrl: "/" });
              }}
            >
              <button className="py-2 px-8 bg-gradient-to-r from-purple-500 to-red-500 hover:bg-white hover:bg-opacity-50 transition-transform transform hover:scale-105 rounded-2xl text-2xl text-white">
                Login With Google
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("github", { callbackUrl: "/" });
              }}
            >
              <button className="py-2 px-8 bg-gradient-to-r from-purple-500 to-red-500 hover:bg-white hover:bg-opacity-50 transition-transform transform hover:scale-105 rounded-2xl text-2xl text-white">
                Login With Github
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
