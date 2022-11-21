import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import {
  Homepage,
  Login,
  SignUp,
  PhotoFeed,
  RestaurantPage,
  MyProfile,
} from "./pages";
import { selectToken } from "./store/user/selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token && location.pathname !== "/signup") {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      {/* <ResponsiveMenu /> */}
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/photos" element={<PhotoFeed />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
