import { client } from "@/sanity/lib/client";
import { QUESTION_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalviews } = await client
    .withConfig({ useCdn: false })
    .fetch(QUESTION_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalviews + 1 })
        .commit()
  );

  const formatNumber = () => {
    return `${totalviews} ${totalviews > 1 ? "content views" : "content view"}`;
  };

  return <p>{formatNumber()}</p>;
};
export default View;
