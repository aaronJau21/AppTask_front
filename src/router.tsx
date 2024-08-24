import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AppLayout,
  CreateProject,
  Dashboard,
  EditProjectView,
  ProjectDetails,
} from "./presentation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/project/create" element={<CreateProject />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route
            path="/project/:projectId/edit"
            element={<EditProjectView />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
