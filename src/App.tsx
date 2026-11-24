import AdminMain from "./components/admin/AdminMain";
import AdminAddCountries from "./components/admin/AdminAddCountries";
import AdminCountries from "./components/admin/AdminCountries";
import AdminUsers from "./components/admin/AdminUsers";
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
        <Route path="/admin-panel" element={<AdminMain></AdminMain>}></Route>
        <Route
          path="/admin-panel/countries"
          element={<AdminCountries></AdminCountries>}
        ></Route>
        <Route
          path="/admin-panel/users"
          element={<AdminUsers></AdminUsers>}
        ></Route>
        <Route
          path="/admin-panel/add-country"
          element={<AdminAddCountries></AdminAddCountries>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
