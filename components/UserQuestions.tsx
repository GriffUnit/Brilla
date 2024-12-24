import { client } from "@/sanity/lib/client";
import { QUESTIONS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import PostCard, { PostTypeCard } from "./PostCard";

const UserQuestions = async ({ id }: { id: string }) => {
  const posts = await client.fetch(QUESTIONS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {posts?.length > 0 ? (
        posts.map((post: PostTypeCard, index: number) => (
          <PostCard key={post?._id} post={post} />
        ))
      ) : (
        <p className="text-3xl font-bold">No posts yet</p>
      )}
    </>
  );
};

export default UserQuestions;
