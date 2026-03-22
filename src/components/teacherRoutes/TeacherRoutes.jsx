import { Outlet } from "react-router-dom";
import Menu from "../menu/menu";

function TeacherRoutes() {
  return (
    <>
      <Menu role="teacher" />
      <Outlet />
    </>
  );
}
export default TeacherRoutes;