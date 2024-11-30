import SelectClubDescription from "./components/select-club-description";
import SelectClubList from "./components/select-club-list";

export default function SignUpClub() {
  return (
    <div className="mx-auto w-[384px]">
      <SelectClubDescription />
      <SelectClubList />
    </div>
  );
}
