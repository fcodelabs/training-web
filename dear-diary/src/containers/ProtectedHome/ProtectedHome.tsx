import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import HomePage from "../HomePage/HomePage";

const ProtectedHome = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn && !storedIsLoggedIn) {
    navigate("/");
    return <Navigate to="/" replace />;
  }

  return <HomePage />;
};

export default ProtectedHome;
