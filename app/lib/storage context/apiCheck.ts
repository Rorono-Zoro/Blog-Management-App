import {create} from "zustand";


interface userApıCheckState{
  apiCheck: boolean,
  setApiCheck: (newApiCheck: (apiCheck:boolean) => boolean) => void
}

const useApiCheck = create<userApıCheckState>((set) => ({
  apiCheck: false,
  setApiCheck: (newApiCheck) => set((state) => ({
    apiCheck:
      newApiCheck(state.apiCheck)
  }))
}))

export default useApiCheck;
