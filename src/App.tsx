import "./styles.css";
import { Nav } from "./Components/Nav/Nav";
import { Header } from "./Components/Header/Header";
import { Cards } from "./Components/DashboardCards/Cards";
import { Exercises } from "./Pages/Exercises";
import { Goals } from "./Pages/Goals";
import { Foods } from "./Pages/Foods";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchInitialData } from "./Utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./Redux/store";

export default function App() {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    fetchInitialData(dispatch);
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/foods" element={<Foods />} />
      </Routes>
    </div>
  );
}
