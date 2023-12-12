import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/Course/CourseDetail";
import NotExistPage from "./pages/404";
import Layout from "./components/layout/Layout";
import CreateCourse from "./pages/Course/CreateCourse";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route path="course/form" element={<CreateCourse />} />
            <Route path="course/:id" element={<CourseDetail />} />

          </Route>
          <Route index path="*" element={<NotExistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
