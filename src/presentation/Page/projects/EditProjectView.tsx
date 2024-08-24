import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { ProjectService } from "../../../domain/services/project.service";
import { EditProjectForm } from "../../components/projects/EditProjectForm";
import useProjectStore from "../../../domain/store/projects/project.store";
// import { useEffect } from "react";

export const EditProjectView = () => {
  const { projectId } = useParams();

  const setData = useProjectStore((state) => state.setData);
  const setProjectId = useProjectStore((state) => state.setProjectId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => ProjectService.getProjectById(projectId!),
    retry: false,
  });

  setData(data);
  setProjectId(projectId!);

  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to="/404" />;
  if (data) return <EditProjectForm />;
};
