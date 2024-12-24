import { auth } from "@/auth";
import PostCard, { PostTypeCard } from "@/components/PostCard";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import UserQuestions from "@/components/UserQuestions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { AUTHOR_BY_ID_QUERY, QUESTIONS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();
  return (
    <>
      <section className="text-white w-full  min-h-[400px] bg-gray-800 border border-gray-700">
        <div className="relative h-auto flex justify-center items-center">
          {user?.backgroundImage ? (
            <div className="relative w-full">
              <img
                src={urlFor(user.backgroundImage).url()}
                className="w-full max-h-[450px] object-cover object-center rounded-t-2xl filter blur-md"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-800 via-transparent to-transparent rounded-t-2xl flex justify-center items-center object-cover"></div>
              <img
                src={urlFor(user.backgroundImage).url()}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 lg:h-72 h-1/2  object-cover rounded-xl z-10"
              />
            </div>
          ) : (
            <img
              src="/background_placeholder.jpeg"
              className="w-full max-h-96 object-cover object-center rounded-t-2xl"
            />
          )}
          <button className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full">
            Edit Background
          </button>
        </div>

        <div className="flex justify-start transform -mt-14 relative gap-3 ml-28 flex-col">
          {user?.image ? (
            <Image
              src={urlFor(user.image).url()}
              alt={user?.username}
              width={200}
              height={200}
              className="rounded-full border-gray-800 border-4"
            />
          ) : (
            <Image
              src="User_placeholder.jpeg"
              alt="placeholder"
              width={200}
              height={200}
              className="rounded-full border-4 border-gray-800"
            />
          )}
          {/* Edit Profile Image Button */}
          {/*  <button className="absolute bottom-0 right-0 bg-gray-800 text-white px-3 py-1 rounded-full">
            Change Profile Image
          </button> */}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-5xl">{user.username}</p>
            <p className="font-medium text-xl">
              {user.bio} . {user.email}
            </p>

            <div className="flex flex-row gap-3 text-xl font-medium text-gray-400 cursor-pointer mb-4">
              <p className="hover:text-white">
                {user.totalViews} Content Views
              </p>
              <Separator orientation="vertical" className="h-6 bg-gray-500" />
              <p className="hover:text-white">
                {" "}
                {user.totalQuestions} Questions Asked
              </p>
              <Separator orientation="vertical" className="h-6 bg-gray-500" />
              <p className="hover:text-white">
                {user.totalAnswers} Answers given
              </p>
              <Separator orientation="vertical" className="h-6 bg-gray-500" />
              <p className="hover:text-white">{user.totalPosts} total posts</p>
            </div>
          </div>
        </div>
      </section>

      <ul className="w-1/2 mt-10 flex relative left-1/2 transform -translate-x-1/2 space-y-7 flex-col">
        <p className="text-5xl font-bold text-white ">
          {session?.id === id ? "Your" : "All"} Posts
        </p>

        <Suspense
          fallback={
            <Skeleton className="bg-zinc-400 h-10 w-1/2 rounded-lg fixed bottom-3 right-3" />
          }
        >
          <UserQuestions id={id} />
        </Suspense>
      </ul>
    </>
  );
};

export default page;
