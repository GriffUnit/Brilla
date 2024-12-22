import { auth } from "@/auth";
import Header from "@/components/Header";
import LeftSideBar from "@/components/LeftSideBar";
import PostCard, { PostTypeCard } from "@/components/PostCard";
import RightSideBar from "@/components/RightSideBar";
import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { AUTHOR_BY_ID_QUERY, QUESTIONS_QUERY } from "@/sanity/lib/queries";
import { Author } from "@/sanity/types";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const session = await auth();
  const id = session?.id;

  const { data: posts } = await sanityFetch({ query: QUESTIONS_QUERY, params });
  const users = await client
    .withConfig({ useCdn: false })
    .fetch(AUTHOR_BY_ID_QUERY, { id });

  return (
    <>
      <div className="flex gap-6 text-white mt-7">
        <section className="w-1/4 pl-9 max-lg:hidden ">
          <LeftSideBar />
        </section>
        <section className="w-1/2">
          <Header search={query} />
          <div className="w-full py-4 mx-auto ">
            <p className="text-3xl font-bold">
              {query ? `Search Results for ${query}` : ""}
            </p>

            <ul className="mt-1 w-full flex flex-col border border-gray-700 rounded-xl">
              {posts?.length > 0 ? (
                posts.map((post: PostTypeCard, index: number) => (
                  <PostCard key={post?._id} post={post} />
                ))
              ) : (
                <p className="text-3xl font-bold">No posts yet</p>
              )}
            </ul>
          </div>
        </section>
        <section className="w-1/4 pr-9 max-lg:hidden ">
          <RightSideBar key={users?._id} user={users} />
        </section>
      </div>

      <SanityLive />
    </>
  );
};

export default Home;
