import { Outlet } from "react-router-dom";
import Menu from "../menu/menu";

function StudentRoutes() {
  return (
    <>
      <Menu role="student" />
      <Outlet />
    </>
  );
}
export default StudentRoutes;