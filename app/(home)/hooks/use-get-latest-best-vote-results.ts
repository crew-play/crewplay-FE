import { getLatestBestVoteResult } from "@/api/vote";
import { TSort } from "@/interface/vote";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useGetLatestBestVoteResult(sort: TSort) {
  return useInfiniteQuery({
    queryKey: ["latestBestVoteResult", sort],
    queryFn: getLatestBestVoteResult,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { totalPage, pageNumber } = lastPage.data as {
        totalPage: number;
        pageNumber: number;
      };
      return pageNumber < totalPage ? pageNumber + 1 : undefined;
    },
  });
}
