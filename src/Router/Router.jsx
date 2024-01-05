import { Route, Routes } from "react-router-dom";
import { Home } from "../server";
import { Bookmark } from "../pages/Bookmark";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
};

export { Router };
