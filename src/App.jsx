import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "@/pages/Accueil";
import TachesOk from "@/pages/TachesOk";
import Layout from "./layouts/Layout";
import Ajouter from "./pages/Ajouter";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Accueil />} />
            <Route path="/taches-ok" element={<TachesOk />} />
            <Route path="/ajouter" element={<Ajouter />} />
            <Route path="/details/:id" element={<Details />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
