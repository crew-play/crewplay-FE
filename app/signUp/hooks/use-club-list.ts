import { getClubList } from "@/api/sign-up";
import { useQuery } from "@tanstack/react-query";

export default function useClubList() {
  return useQuery({
    queryKey: ["clubList"],
    queryFn: getClubList,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
