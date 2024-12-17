import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import RightSideBar from "@/components/RightSideBar";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const users = [
    {
      user: { _id: 1 },
      author: { _id: 1 },
      name: "Griffin",
      username: "Champion",
      image: "/customer1.png",
      backgroundImage:
        "https://th.bing.com/th/id/OIP.dh4SSrv17UiWfZ1-vaCYAwHaFU?w=1420&h=1020&rs=1&pid=ImgDetMain",
      questions: "6",
      answers: "14",
      posts: "77",
      views: "190K",
      bio: "Little drops of water make a mighty ocean",
    },
  ];

  const posts = [
    {
      _createdAt: new Date(),
      author: {
        _id: 1,
        image: "/customer1.png",
        name: "Champion",
        bio: "The ultimate learner",
      },
      _id: 1, //id of the post
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecatiLorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecati.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi odio officiis reprehenderit eius perferendis corporis porro? Odio iusto dignissimos nesciunt officia neque. Iure a dolorum repellat necessitatibus saepe obcaecati..",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-429d5a110f938333bb1dd61a5a490d3e",
      category: "Mechanical Engineering",
      title: "Strength of Materials",
      email: "griffinadjei@gmail.com",
    },
  ];
  return (
    <>
      <div className="flex gap-6 text-white mt-7">
        <div className="w-1/4 bg-gray-800 p-4"> Left Sidebar </div>
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
          {users.map((user) => (
            <RightSideBar key={user?.username} user={user} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
