import useClubList from "@/app/signUp/hooks/use-club-list";
import Spinner from "@/components/spinner";
import ClubCard from "./club-card";

export default function ClubList() {
  const { data, isLoading, isError } = useClubList();

  if (isLoading) return <Spinner />;

  if (isError) {
    alert("구단 목록 조회에 실패하였습니다.");
    return;
  }

  if (!data || !data.data) {
    alert("구단 목록 조회에 실패하였습니다.");
    return;
  }

  const clubListLength = data.data.length - 1;

  return (
    <div className="my-[24px] h-[300px] overflow-auto">
      {data.data.map((club, index) => {
        return (
          <ClubCard
            key={club.clubName}
            isLast={clubListLength === index}
            clubName={club.clubName}
            emblemImg={club.emblemImg}
          />
        );
      })}
    </div>
  );
}
