import { ProjectResponse, ProjectsResponse } from "../interfaces";
import { ProjectFOrmData } from "../../presentation/types";
import { api } from "../api/axios";

export class ProjectService {
  static async createProject(projectFormData: ProjectFOrmData) {
    try {
      const { data } = await api.post("projects/create", projectFormData);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getProjects(): Promise<ProjectsResponse> {
    try {
      const { data } = await api.get<ProjectsResponse>("projects");

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getProjectById(id: string): Promise<ProjectResponse> {
    try {
      const { data } = await api.get<ProjectResponse>(`projects/${id}`);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async updateProject({
    projecId,
    formData,
  }: {
    projecId: string;
    formData: ProjectFOrmData;
  }): Promise<string> {
    try {
      const { data } = await api.patch<string>(
        `projects/${projecId}`,
        formData
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async deleteProject (id:string):Promise<string> {
    try {
      const {data} = await api.delete<string>(`projects/${id}`)
      return data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
