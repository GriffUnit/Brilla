import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();
  return (
    <>
      <section className="text-white min-w-min p-10 rounded-b-2xl min-h-40 mt-6 bg-gray-800 border border-gray-700">
        <div className="relative h-auto">
          {user?.backgroundImage ? (
            <img
              src={urlFor(user.backgroundImage).url()}
              className="w-full min-h-16 object-cover object-bottom rounded-t-2xl"
            />
          ) : (
            <img
              src="/background_placeholder.jpeg"
              className="w-full min-h-16 object-cover object-bottom rounded-t-2xl"
            />
          )}
          {/* Edit Background Button */}
          <button className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full">
            Edit Background
          </button>
        </div>

        <div className="flex justify-start transform -mt-14 relative">
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
          <button className="absolute bottom-0 right-0 bg-gray-800 text-white px-3 py-1 rounded-full">
            Change Profile Image
          </button>
        </div>
      </section>
    </>
  );
};

export default page;
