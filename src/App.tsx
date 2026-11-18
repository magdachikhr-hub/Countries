import AdminMainPage from "./pages/AdminMainPage";
import AdminCountryPage from "./pages/AdminCountryPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path={`/country-details/:id`}
          element={<CountryDetailPage></CountryDetailPage>}
        ></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route
          path="/admin-panel"
          element={<AdminMainPage></AdminMainPage>}
        ></Route>
        <Route
          path="/admin-panel/country"
          element={<AdminCountryPage></AdminCountryPage>}
        ></Route>
        <Route
          path="/admin-panel/users"
          element={<AdminUsersPage></AdminUsersPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
