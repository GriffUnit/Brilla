"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <div className="flex gap-2">
      <button type="reset" onClick={reset}>
        <Link href="/" className="size-8 rounded-full bg-slate-800 text-white">
          <X className="size-5" />
        </Link>
      </button>
    </div>
  );
};

export default SearchFormReset;