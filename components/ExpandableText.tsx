"use client";

import { useState } from "react";
import markdownit from "markdown-it";

interface Props {
  description?: string;
  maxChars?: number;
}

const ExpandableText = (props: Props) => {
  const { description = "", maxChars = 200 } = props;
  const [isExpanded, setExpanded] = useState(false);

  const md = markdownit();

  if (description.length <= maxChars) return <p>{description}</p>;
  const text = isExpanded ? description : description.substring(0, maxChars);
  const parsedContent = md.render(text || "");

  return (
    <div className="text-xl max-sm:text-sm">
      {parsedContent && (
        <article dangerouslySetInnerHTML={{ __html: parsedContent }} />
      )}
      <button
        onClick={() => setExpanded(!isExpanded)}
        className="text-blue-600 hover:underline"
      >
        {isExpanded ? " Less" : "....More"}
      </button>
    </div>
  );
};

export default ExpandableText;
