import { create } from "zustand";

interface ISignUpStore {
  selectedTeam: {
    id: string;
    teamName: string;
  };
}

const useSignUpStore = create<ISignUpStore>()((set) => ({
  selectedTeam : {
    id: "",
    teamName: ""
  },
  setSelectedTeam : (newState) => set(() => selectedTeam: newState)
}))

export default useSignUpStore;
