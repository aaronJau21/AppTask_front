import { ProjectFOrmData } from "../../presentation/types";
import { api } from "../api/axios";

export class ProjectService {
  static async createProject(projectFormData: ProjectFOrmData) {
    try {
      const { data } = await api.post("/projects/create", projectFormData);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
