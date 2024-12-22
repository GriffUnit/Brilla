import { leftBarDetails } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <div className="side_bar">
      <h1 className="text-red-500 text-4xl leading-normal font-semibold ml-1">
        Top Courses
      </h1>
      <div className="mt-2">
        {leftBarDetails.map((detail) => (
          <Link href={`/?query=${detail}`} key={detail.course}>
            <div className="flex flex-row gap-2 items-center p-4">
              <div className="relative group rounded-2xl w-50 h-50">
                <Image
                  src={detail.image}
                  alt={detail.course}
                  width={50}
                  height={50}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300"></div>
              </div>

              <p className="text-xl font-medium hover:underline">
                {detail.course}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
