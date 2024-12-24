"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PostTypeCard } from "./PostCard";

interface Props {
  post: PostTypeCard;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const HoverCard = ({ src, alt, width, height, post }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { author } = post;

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
          <div className="flex flex-row max-md:flex-col bg-gradient-to-r from-red-800 to-gray-800 rounded-xl shadow-lg absolute right-0 border-2 border-gray-700 transform translate-x-10 translate-y-16 max-md:translate-y-10 gap-3 md:min-w-[500px] w-64 h-auto p-3">
            <div className="flex h-auto select-none rounded-l-xl no-undline focus:shadow-md w-1/2">
              <Image
                src={src}
                alt={alt}
                objectFit="cover"
                width={250}
                height={250}
                className="rounded-l-xl transition-transform duration-300 ease-in-out transform hover:scale-105 max-md:hidden"
              />
            </div>
            <div className="flex flex-col gap-6 h-full w-1/2 max-md:w-full">
              <p className="font-semi text-xl flex select-none ">
                {author?.name}
              </p>
              <div className="relative flex flex-row gap-2 items-center">
                <Image
                  src="/about-me.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="icon_style"
                />
                <p className="text-lg text-gray-300">{author?.bio}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/questions.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="icon_style"
                />
                <p className="hover_data">{author?.totalQuestions} Questions</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/answers.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="icon_style"
                />
                <p className="hover_data">7{author?.totalAnswers} Answered</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/views.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="icon_style "
                />
                <p className="hover_data">{author?.totalViews} content views</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/email.png"
                  alt="placeholder"
                  width={34}
                  height={34}
                  className="icon_style"
                />
                <p className="hover_data pr-2 max-md:line-clamp-1">
                  {author?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*Convert the question and answer divs into links whereby upon clicking them it takes us to a page containing the user's questions and answer*/}
    </div>
  );
};

export default HoverCard;
