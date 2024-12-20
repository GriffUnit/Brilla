import Link from "next/link";
import { formatDate } from "@/lib/utils";
import PostCardFooter from "./PostCardFooter";
import HoverCard from "./HoverCard";
import ExpandableText from "./ExpandableText";
import PostImage from "./PostImage";
import { urlFor } from "@/sanity/lib/image";
import { Author, Question } from "@/sanity/types";
import View from "./Views";

export type PostTypeCard = Omit<Question, "author"> & { author?: Author };

const PostCard = ({ post }: { post: PostTypeCard }) => {
  const {
    _createdAt,
    author,
    _id, //id of the post
    description,
    image,
    category,
    topic,
  } = post;

  return (
    <li className="bg-gray-800 shadow-lg text-white w-full rounded-xl">
      <div className="flex items-center flex-row gap-2 justify-between p-3 max-sm:flex-col max-sm:justify-start">
        <div className="flex items-center gap-2">
          <Link href={`/user/${author?._id}`}>
            <HoverCard
              src={urlFor(author?.image!).url()}
              alt={author?.name!}
              width={65}
              height={65}
              post={post}
            />
          </Link>
          <div className="flex flex-col gap-1">
            <Link href={`/user/${author?._id}`}>
              <p className="line-clamp-1 font-bold text-xl">{author?.name} </p>
            </Link>
            <Link href={`/user/${author?._id}`}>
              <p className="line-clamp-1 font-medium text-gray-400 text-lg max-sm:text-sm ">
                {author?.bio} . {formatDate(_createdAt)}
              </p>
            </Link>
          </div>
        </div>
        <div>
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <div className="p-3 bg-slate-600 rounded-3xl">
              <p className="font-medium text-xl hover:text-slate-700 text-center  max-sm:text-sm">
                {category}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="p-2">
          <p className="font-bold flex text-2xl justify-start max-sm:text-sm">
            {topic}
          </p>

          <ExpandableText description={description} />
        </div>

        <PostImage image={urlFor(image).url()} />
      </div>
      <div className="mt-3">
        <PostCardFooter />
        {/*         <View id={_id} />
         */}{" "}
      </div>
    </li>
  );
};

export default PostCard;
