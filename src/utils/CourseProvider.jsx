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

  const [searchresult,setSearch] = useState([])

  const [singlecourse, setCourse] = useState([]);
  const [sort, setFilter] = useState(false);

  const [query, setQuery] = useState("");



  

  function SearchQuery(query) {

    




    const copy = allcourses.slice();

    console.log(copy);
    //copy our main data because we will update state every time user search incase lose original data

    const result = copy.filter((course) => {
      return course.title.toLowerCase().includes(query.toLowerCase() || "");
    });

    //update or set state to our search result base on our title that we filter

    setSearch(pre=>[...result])


  }

  return (
    <Courseprovider.Provider
      value={{
        initstate: allcourses,
        dispatch: dispatch,
        searchresult:searchresult,
        query: query,
        isloading: false,
        length: course.length,
        setCourse: setCourse,
        singlecourse,
        singlecourse,
        SearchQuery: SearchQuery,
        setQuery: setQuery,
      }}
    >
      {children}
    </Courseprovider.Provider>
  );
}

export { CourseProvider, useCourseContext };
