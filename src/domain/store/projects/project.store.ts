import { UseFormRegister } from "react-hook-form";
import { create } from "zustand";
import { ProjectFOrmData } from "../../../presentation/types";

interface ProjectStore {
  register: UseFormRegister<ProjectFOrmData> | null;
  setRegister: (register: UseFormRegister<ProjectFOrmData>) => void;
}

const useProjectStore = create<ProjectStore>()((set) => ({
  register: null,
  setRegister: (register) => set({ register }),
}));

export default useProjectStore;
