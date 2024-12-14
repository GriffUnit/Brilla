"use client";

import Image from "next/image";
import Link from "next/link";

const PostCardFooter = () => {
  return (
    <div className="p-2 max-w-56 flex flex-row gap-10">
      <Link href={"/"} className="w-20 hover:bg-gray-600 rounded-xl">
        <Image src="/like.png" width={40} height={40} alt="like" />
      </Link>
      <Link href="/" className="w-20 hover:bg-gray-600 rounded-xl">
        <Image src="/comment.png" width={40} height={40} alt="like" />
      </Link>
      <Link href="/" className="w-20 hover:bg-gray-600 rounded-xl">
        <Image src="/share.png" width={40} height={40} alt="like" />
      </Link>
    </div>
  );
};

export default PostCardFooter;
