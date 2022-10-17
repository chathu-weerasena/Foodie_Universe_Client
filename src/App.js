import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { ResponsiveMenu, Navigation, MessageBox } from "./components";
import {
  Homepage,
  Login,
  SignUp,
  PhotoFeed,
  RestaurantPage,
  MyProfile,
} from "./pages";

function App() {
  const dispatch = useDispatch();

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
