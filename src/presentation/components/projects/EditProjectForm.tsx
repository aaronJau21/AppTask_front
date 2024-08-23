import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { ProjectForm } from "./ProjectForm";
import { ProjectFOrmData } from "../../types";
import useProjectStore from "../../../domain/store/projects/project.store";
import { ProjectService } from "../../../domain/services/project.service";

export const EditProjectForm = () => {
  //Hooks de React
  const navigate = useNavigate();

  // Store
  const setRegister = useProjectStore((state) => state.setRegister);
  const data = useProjectStore((state) => state.data);
  const projecId = useProjectStore((state) => state.projecId);

  const { register, handleSubmit } = useForm<ProjectFOrmData>({
    defaultValues: {
      clientName: data?.clientName,
      description: data?.description,
      projectName: data?.projectName,
    },
  });

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: ProjectService.updateProject,
    onError: () => {
      toast.error("Error al Actualizaar");
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey:['projects']})
      queryClient.invalidateQueries({queryKey:["editProject", projecId]})
      toast.success(data);
      navigate("/");
    },
  });

  setRegister(register);
  const handleForm = (formData: ProjectFOrmData) => {
    const data = {
      projecId,
      formData,
    };

    mutate(data);
  };

  // useEffect(() => {
  //   setRegister(register);
  // }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Editar Proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          LLena el siguiente formulario para editar un proyecto
        </p>
        <nav className="my-5">
          <Link
            to="/"
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          >
            Volver a Projectos
          </Link>
        </nav>

        <form
          className="mt-10 bg-white shadow-lg p-10 rounded-lg"
          onSubmit={handleSubmit(handleForm)}
          noValidate
        >
          <ProjectForm />

          <input
            type="submit"
            value="Guardar cambios"
            className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
};
