//create a context
import * as ACTION_TYPE from '../store/action/action_type'
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { FaZ } from "react-icons/fa6";
import { Coursereducer } from "../store/reducer/coursereducer";
import { course } from "./data";

const Courseprovider = createContext();


function useCourseContext() {
  const context = useContext(Courseprovider);
  return context;
}

function CourseProvider({ children }) {
  const [allcourses, dispatch] = useReducer(Coursereducer, course);



  const [singlecourse, setCourse] = useState([]);
  const [sort, setFilter] = useState(false);





  


  return (
    <Courseprovider.Provider
      value={{
        initstate: allcourses,
        dispatch: dispatch,
        isloading: false,
        length: allcourses.length,
        setCourse: setCourse,
        singlecourse
      }}
    >
      {children}
    </Courseprovider.Provider>
  );
}

export { CourseProvider, useCourseContext };
