import { signOut } from "@/auth";
import { urlFor } from "@/sanity/lib/image";
import { Author } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSideBar = ({ user }: { user: Author }) => {
  return (
    <>
      <div className="side_bar">
        <Link href={`/user/${user?._id}`}>
          {user?.backgroundImage ? (
            <img
              src={urlFor(user.backgroundImage).url()}
              className="w-full h-24 rounded-t-xl object-cover object-bottom"
            />
          ) : (
            <img
              src="/background_placeholder.jpeg"
              className="w-full h-24 rounded-t-xl object-cover object-bottom"
            />
          )}
          <div className="flex justify-center transform -translate-y-7 ">
            {user?.image ? (
              <Image
                src={urlFor(user.image).url()}
                alt={user?.username || "default user image"}
                width={80}
                height={80}
                className="rounded-2xl border-4 border-gray-800 shadow-lg"
              />
            ) : (
              <Image
                src="User_placeholder.jpeg"
                alt="placeholder"
                width={80}
                height={80}
                className="rounded-2xl border-4 border-gray-800 shadow-lg"
              />
            )}
          </div>
        </Link>
        <div className=" flex gap-1 flex-col justify-center items-center">
          <h3 className="text-center text-2xl font-semibold hover:underline">
            {user?.username}
          </h3>
          <p className="text-center text-lg text-gray-500">{user?.bio}</p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button
              type="submit"
              className="px-12 mt-5 bg-slate-700 py-3 rounded-xl flex flex-row flex-1 items-center hover:bg-slate-600"
            >
              <img src="/logout.png" className="w-10 h-10" />
              LogOut
            </button>
          </form>
        </div>
        <hr className=" bg-gray-500 w-full mx-auto border-0 h-px my-7" />
        <div className="flex flex-col gap-4 px-5 py-2">
          <div className="rightBar_data">
            <Image
              src="/questions.png"
              alt="placeholder"
              width={34}
              height={34}
              className="icon_style"
            />
            <p className="font-medium text-lg">
              Asked {user?.totalQuestions} Questions
            </p>
          </div>
          <hr className="divider" />

          <div className="rightBar_data">
            <Image
              src="/answers.png"
              alt="placeholder"
              width={34}
              height={34}
              className="icon_style"
            />
            <p className="font-medium text-lg">
              Answered {user?.totalAnswers} questions
            </p>
          </div>
          <hr className="divider" />

          <div className="rightBar_data">
            <Image
              src="/post.png"
              alt="placeholder"
              width={34}
              height={34}
              className="icon_style"
            />
            <p className="font-medium text-lg">{user?.totalPosts} posts</p>
          </div>
          <hr className="divider" />

          <div className="rightBar_data">
            <Image
              src="/views.png"
              alt="placeholder"
              width={34}
              height={34}
              className="icon_style"
            />
            <p className="font-medium text-lg">
              {user?.totalViews} total content views
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
