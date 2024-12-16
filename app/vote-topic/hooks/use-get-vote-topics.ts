import { getTopics } from "@/api/vote-topic";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export default function useGetVoteTopic() {
  return useInfiniteQuery({
    queryKey: ["topics"],
    queryFn: ({ pageParam }) => getTopics(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { totalPage, pageNumber } = lastPage.data as {
        totalPage: number;
        pageNumber: number;
      };
      return pageNumber + 1 < totalPage ? pageNumber + 1 : undefined;
    },
  });
}
