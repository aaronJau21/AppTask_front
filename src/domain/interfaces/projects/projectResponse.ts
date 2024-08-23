export interface ProjectsResponse {
  projects: Project[];
}

export interface Project {
  _id:         string;
  projectName: string;
  clientName:  string;
  description: string;
  tasks:       any[];
  createdAt:   Date;
  updatedAt:   Date;
  __v:         number;
}
