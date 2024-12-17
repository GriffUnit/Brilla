import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSideBar = ({ user }: { user: userTypeCard }) => {
  const {
    _id,
    name,
    username,
    image,
    backgroundImage,
    questions,
    answers,
    posts,
    views,
    bio,
    author,
  } = user;
  return (
    <>
      <div className="top-0 w-full bg-gray-800 h-auto rounded-xl flex flex-col justify-center border border-gray-700">
        <Link href={`/user/${author?._id}`}>
          <img
            src={backgroundImage}
            className="w-full h-24 rounded-t-xl object-cover object-bottom"
          />
          <div className="flex justify-center transform -translate-y-7 ">
            <Image
              src={image}
              alt={username}
              width={80}
              height={80}
              className="rounded-2xl border-4 border-gray-800 shadow-lg"
            />
          </div>
        </Link>
        <div className=" flex gap-1 flex-col justify-center items-center">
          <h3 className="text-center text-2xl font-semibold hover:underline">
            {username}
          </h3>
          <p className="text-center text-lg text-gray-500">{bio}</p>
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
            <p className="font-medium text-lg">Asked {questions} Questions</p>
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
            <p className="font-medium text-lg">Answered {answers} questions</p>
          </div>
          <hr className=" divider" />

          <div className="rightBar_data">
            <Image
              src="/post.png"
              alt="placeholder"
              width={34}
              height={34}
              className="icon_style"
            />
            <p className="font-medium text-lg">{posts} posts</p>
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
            <p className="font-medium text-lg">{views} total content views</p>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /*convert the questions, answers, posts and views divs into links that would showcase the list of questions answers, posts and all posts(i.e all questions, answerd questions, and posts: in response to clicking the total content views link)*/
}
export default RightSideBar;
