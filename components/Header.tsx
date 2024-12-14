import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { Separator } from "./ui/separator";
import AskPost from "./AskPost";

const Header = async ({ search }: { search?: string }) => {
  const session = await auth();

  return (
    <div className="w-full h-auto bg-gray-800 rounded-xl flex flex-row p-3 gap-5 ">
      <Link href={`/user/${session?.id}`} className="">
        <Image
          /*  src={session?.user?.image || ""}
          alt={session?.user?.name || ""} */
          src="/customer1.png"
          alt="customer"
          width={56}
          height={56}
          className="rounded-full"
        />
      </Link>
      <div className="w-full flex flex-col gap-2 pr-2">
        <SearchForm query={search} />
        <div className="flex flex-row items-center justify-evenly w-full">
          {/* <Link href="/questions/ask" className="w-60">
            <button className="header_button">
              <img src="/ask.png" alt="ask" className="w-8" />
              Ask
            </button>
          </Link> */}
          <AskPost title={"Ask"} />
          <Separator orientation="vertical" className="h-6 bg-gray-600" />
          <Link href="/questions/answer" className="w-60">
            <button className="header_button">
              <img src="/answer.png" alt="answer" className="w-8" />
              Answer
            </button>
          </Link>
          <Separator orientation="vertical" className="h-6 bg-gray-600" />
          <AskPost title={"Post"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
