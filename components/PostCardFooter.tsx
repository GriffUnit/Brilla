"use client";

import Image from "next/image";
import Link from "next/link";

const PostCardFooter = () => {
  return (
    <div className="p-2 max-w-56 flex flex-row gap-10">
      <Link href="/" className="postfooter_icon">
        <Image src="/like.png" width={32} height={32} alt="like" />
      </Link>
      <Link href="/" className="postfooter_icon">
        <Image src="/comment.png" width={32} height={32} alt="like" />
      </Link>
      <Link href="/" className="postfooter_icon">
        <Image src="/share.png" width={32} height={32} alt="like" />
      </Link>
    </div>
  );
};

export default PostCardFooter;
