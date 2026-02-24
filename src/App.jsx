import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layout/LoginLayout";
import { useEffect } from "react";
import { verifyToken } from "./api/verifyToken";
import DesktopLayout from "./layout/DesktopLayout";
import AllFaculties from "./views/AllFaculties";
import StudentsList from "./views/StudentsList";

const App = () => {
  const navigate = useNavigate();
  // console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    verifyToken(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />
      <Route
        key={"/all-faculties/:id"}
        path={"/all-faculties/:id"}
        element={
          <DesktopLayout>
            <AllFaculties />
          </DesktopLayout>
        }
      />
      <Route
        key={"/students-list/:id"}
        path={"/students-list/:id"}
        element={
          <DesktopLayout>
            <StudentsList />
          </DesktopLayout>
        }
      />

      <Route path="/*" element={<ComponentList />} />
    </Routes>
  );
};

export default App;
