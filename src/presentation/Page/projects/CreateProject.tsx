import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ProjectForm } from "../../components/projects/ProjectForm";
import { ProjectFOrmData } from "../../types";
import { ProjectService } from "../../../domain/services/project.service";
import useProjectStore from "../../../domain/store/projects/project.store";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";

export const CreateProject = () => {
  const navigate = useNavigate();
  // Store
  const setRegister = useProjectStore((state) => state.setRegister);

  const { register, handleSubmit } = useForm<ProjectFOrmData>({
    defaultValues: {
      projectName: "",
      clientName: "",
      description: "",
    },
  });

  const {mutate} = useMutation({
    mutationFn: ProjectService.createProject,
    onError: () => toast.error('No se creo el Projecto'),
    onSuccess: () => {
      toast.success("Project Created");
      navigate("/");
    },
  });

  useEffect(() => {
    setRegister(register);
  }, []);

  const handleForm = (data: ProjectFOrmData) => mutate(data)

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear Proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">
          LLena el siguiente formulario para crear un proyecto
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
            value="Crear Proyecto"
            className=" bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
};
