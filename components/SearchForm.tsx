import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className=" w-full min-h-14 bg-slate-900 border-2 border-slate-700 rounded-3xl text-lg px-5 flex flex-row items-center max-md:max-w-[400px]"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 font-bold placeholder:font-semibold placeholder:text-b w-full h-full bg-slate-900 border-0 outline-none"
        placeholder="Look for questions"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="rounded-full bg-slate-700 flex justify-center items-center"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
