import { useQuery } from "@tanstack/react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ProjectService } from "../../../domain/services/project.service";
import useProjectStore from "../../../domain/store/projects/project.store";
import AddTaskModal from '../../components/tasks/AddTaskModal';

export const ProjectDetails = () => {
  const naigate = useNavigate()
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
  if (data)
    return (
      <>
        <h1 className="text-5xl font-black">{data.projectName}</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          {data.description}
        </p>
        <nav className="my-5 flex gap-3">
          <button
            type="button"
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            onClick={() => naigate('?newTask=true')}
          >
            Agregar Tarea
          </button>
        </nav>

        <AddTaskModal />
      </>
    );
};
