import { useQuery } from "@tanstack/react-query";
import { TSelectedMenu } from "../page";
import { getTodayIssue } from "@/api/today-news";

export default function useGetTodayIssue(selectedMenu: TSelectedMenu) {
  return useQuery({
    queryKey: ["todayIssue", selectedMenu],
    queryFn: () => {
      return getTodayIssue(selectedMenu);
    },
  });
}
