import { getTodayIssue } from "@/api/today-news";
import { useInfiniteQuery } from "@tanstack/react-query";
import { TSelectedMenu } from "../page";

export default function useGetTodayIssue(selectedMenu: TSelectedMenu) {
  return useInfiniteQuery({
    queryKey: ["todayIssue", selectedMenu],
    queryFn: ({ pageParam }) => {
      return getTodayIssue(selectedMenu, pageParam);
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
