import { getUserProfile } from "@/api/user-profile";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserProfile() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });
}
