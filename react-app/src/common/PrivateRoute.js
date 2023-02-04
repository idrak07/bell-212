import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import "../../src/components/DashboardSidebar/DashboardSidebar.css";
import { SidebarContext } from "../context/context.";

export const ProtectedRoute = ({
  redirectPath = "/auth",
  children,
  isAllowed,
}) => {
  const location = useLocation();
  const [inactive, setInactive] =  useContext(SidebarContext)
  console.log('protected route')
  useEffect(() => {
    console.log({inactive})

    const c = document.querySelector(".content-wrapper");
    if (inactive) {
      c.classList.add("inactive");
    } else {
      c.classList.remove("inactive");
    }
  }, [inactive, location.pathname]);
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
