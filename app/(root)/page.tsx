import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      author: {
        _id: 1,
        image: "/customer1.png",
        name: "Champion",
        headline: "The ultimate learner",
      },
      _id: 1, //id of the post
      description: "This is a description.",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-429d5a110f938333bb1dd61a5a490d3e",
      category: "Mechanical Engineering",
      title: "Strength of Materials",
    },
  ];
  return (
    <>
      <div className="flex gap-6 text-white mt-7">
        <div className="w-1/4 bg-red-500 p-4"> Left Sidebar </div>
        <section className="w-1/2">
          <Header search={query} />
          <div className="w-full py-4 mx-auto ">
            <p className="text-3xl font-bold">
              {query ? `Search Results for ${query}` : ""}
            </p>

            <ul className="mt-1 w-full flex flex-col">
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
        <div className="w-1/4 bg-gray-800 p-4 max-md:hidden">Right Sidebar</div>
      </div>
    </>
  );
};

export default Home;
