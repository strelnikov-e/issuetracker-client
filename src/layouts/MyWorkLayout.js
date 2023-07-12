import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function MyWorkLayout() {


  return (
    <>
      <div className="container-md">
        <Breadcrumbs />
        <h4>Your work</h4>

        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
}
