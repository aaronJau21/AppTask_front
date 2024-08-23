import { UseFormRegister } from "react-hook-form";
import { create } from "zustand";
import { ProjectFOrmData } from "../../../presentation/types";
import { ProjectResponse } from "../../interfaces";

interface ProjectStore {
  register: UseFormRegister<ProjectFOrmData> | null;
  setRegister: (register: UseFormRegister<ProjectFOrmData>) => void;
  data: ProjectResponse | undefined;
  setData: (data: ProjectResponse | undefined) => void;
  projecId: string;
  setProjectId: (rojecId: string) => void;
}

const useProjectStore = create<ProjectStore>()((set) => ({
  register: null,
  setRegister: (register) => set({ register }),
  data: undefined,
  setData: (data) => set({ data }),
  projecId: "",
  setProjectId: (projecId) => set({ projecId }),
}));

export default useProjectStore;
