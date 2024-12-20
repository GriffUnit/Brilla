"use client";

import React, { useState } from "react";

const PostImage = ({ image }: { image?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dimensions = isExpanded ? "h-auto" : "max-h-[600px]";
  return (
    <img
      src={image}
      alt="placeholder"
      onClick={() => setIsExpanded(!isExpanded)}
      className={`w-full object-cover ${dimensions} hover:cursor-pointer object-top`}
    />
  );
};

export default PostImage;
