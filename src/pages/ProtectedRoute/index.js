import { useEffect } from "react";
import { getData } from "../../services/storge";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const Navigate = useNavigate();

  useEffect(() => {
    const user = getData("User");
    if (props.isPubicRoute) {
      if (!!user) {
        Navigate("/");
      }
    } else {
      if (!user) {
        Navigate("/login");
      }
    }
  });

  return props.children;
};

export default ProtectedRoute;
