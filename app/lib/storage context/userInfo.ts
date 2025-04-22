import {create} from "zustand";


interface UserInfoState {
  // if false rank = normal user if true rank = admin
  userRank: boolean,
  userName: string,
  setUserRank: (checkRank : (userRank: boolean) => boolean) => void,
  setUserName: (checkName: (userName: string) => string) => void,
}

const useUserInfo = create<UserInfoState>((set) => ({
  userRank: false,
  userName: "",
  setUserRank: (checkRank) => set((state) => ({
    userRank:
      checkRank(state.userRank)
  })),
  setUserName: (checkName) => set((state) => ({
    userName:
      checkName(state.userName)
  }))
}))

export default useUserInfo;