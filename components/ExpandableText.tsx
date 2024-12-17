"use client";

import { useState } from "react";

interface Props {
  description: string;
  maxChars?: number;
}

const ExpandableText = ({ description, maxChars = 200 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (description.length <= maxChars) return <p>{description}</p>;
  const text = isExpanded ? description : description.substring(0, maxChars);
  return (
    <p className="text-xl max-sm:text-sm">
      {text}
      <button
        onClick={() => setExpanded(!isExpanded)}
        className="text-blue-600 hover:underline"
      >
        {isExpanded ? " Less" : "....More"}
      </button>
    </p>
  );
};

export default ExpandableText;
