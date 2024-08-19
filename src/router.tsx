import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout, CreateProject, Dashboard } from "./presentation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} index />
          <Route path="/project/create" element={<CreateProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
