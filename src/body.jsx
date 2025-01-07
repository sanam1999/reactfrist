import React, {useState}  from "react";

import { Route, Routes } from "react-router-dom";
import PATHS from "./constants/pathConstants";
import Todo from "./pages/Toda/Todo";
import Api from "./pages/Api/Api";
import State from "./pages/State/State";
import StateManagement from "./pages/StateManagement/StateManagement";
import ReactQuery from "./pages/ReactQuery/ReactQuery";
import Form from "./pages/form/form";
import TypeSafety from "./pages/TypeSafety/TypeSafety";
import Post from "./pages/Post/Createpost";

function Body() {

  const randomProps = {
    name: "Sanam",
    email: "sanam@example.com",
    age: 25,
    status: false,
    friends: ["Alice", " Bob", " Charlie"],
  };



  return (
    <div className="body">

      <Routes>
    <Route path={PATHS.TODO} element={<Todo />} />
    <Route path={PATHS.API} element={<Api />} />
    <Route path={PATHS.STATE} element={<State />} />
    <Route path={PATHS.STATEManagement} element={<StateManagement />} />
    <Route path={PATHS.REACTQUERY} element={<ReactQuery />} />
    <Route path={PATHS.FORM} element={<Form {...randomProps} />} /> {/* Corrected here */}
    <Route path={PATHS.TYPESAFETY} element={<TypeSafety {...randomProps} />} />
    <Route path={PATHS.CREATEPOST} element={<Post />} />
</Routes>
     
    </div>
  );
}

export default Body;
