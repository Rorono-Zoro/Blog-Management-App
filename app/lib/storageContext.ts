import  {create} from "zustand";

interface UserState {
  isUserActive: boolean,
  setIsUserActive: (checkUser: (isActive:boolean) => boolean) => void,
}

const useUserStore = create<UserState>((set) => ({
  isUserActive: false,
  setIsUserActive: (checkUser) => set((state) => ({
    isUserActive:
      checkUser(state.isUserActive)
  }))
}));

export default useUserStore;




