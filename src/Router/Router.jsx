import { Route, Routes } from "react-router-dom";
import { Home } from "../server";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookmark" />
    </Routes>
  );
};

export { Router };
