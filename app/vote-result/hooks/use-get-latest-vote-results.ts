import { getLatestVoteResults } from "@/api/vote";
import { TSort } from "@/interface/vote";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetLatestVoteResults(sort: TSort) {
  return useInfiniteQuery({
    queryKey: ["latestBestVoteResult", sort],
    queryFn: ({ pageParam }) => {
      return getLatestVoteResults(pageParam, sort);
    },
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
