import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { Login } from "../pages/LoginPage";
import { Register } from "../pages/RegisterPage";
import { PublicRoutes } from "./PublicRoute";
import { PrivateRoutes } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route path="*" element={<Login/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="home" element={<Home/>} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
