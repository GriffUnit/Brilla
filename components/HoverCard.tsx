"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  post: PostTypeCard;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const HoverCard = ({ src, alt, width, height, post }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    _createdAt,
    author,
    _id, //id of the post
    description,
    image,
    category,
    title,
  } = post;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-2xl"
      />
      {isHovered && (
        <div className="hover:bg-black hover:bg-opacity-50 rounded-2xl absolute inset-0">
          <div className="flex flex-row bg-gradient-to-r from-red-800 to-gray-800 rounded-xl shadow-lg absolute right-0 border-2 border-gray-700 transform translate-x-10 translate-y-16 gap-3 md:w-[500px] w-64 h-auto p-3">
            <div className="flex h-auto select-none rounded-l-xl no-underline focus:shadow-md w-1/2">
              <Image
                src={author?.image!}
                alt={author?.name!}
                objectFit="cover"
                width={250}
                height={250}
                className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-6 h-full w-1/2">
              <p className="font-bold text-xl flex select-none ">
                {author?.name}
              </p>
              <div className="relative flex flex-row gap-2 items-center">
                <Image
                  src="/about-me.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="p-1 bg-gray-900 rounded-2xl"
                />
                <p className="text-lg">{author?.headline}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/questions.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="p-1 bg-gray-900 rounded-2xl"
                />
                <p className="font-bold text-lg">Questions</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/answers.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="p-1 bg-gray-900 rounded-2xl"
                />
                <p className="font-bold text-lg">Answered</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/views.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="p-1 bg-gray-900 rounded-2xl"
                />
                <p className="font-bold text-lg">21M content views</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
