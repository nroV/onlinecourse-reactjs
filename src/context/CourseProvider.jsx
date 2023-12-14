//create a context

import { createContext, useContext, useReducer, useState } from "react";
import { FaZ } from "react-icons/fa6";

const Courseprovider = createContext()

const course = 
  [
    {
      id: 1,
      title: "Nodejs for Starter",
      img:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      summaries: "Perfect course for beginners who love JavaScript server-side",
      chapters: [
        {
          id: 1,
          name: "Introduction",
          lessons: [
            {
              id: 1,
              title: "Data type and variable",
            },
          ],
        },
        {
          id: 2,
          name: "Operation",
          lessons: [
            {
              id: 1,
              title: "Expression vs Operation",
            },
          ],
        },
        {
          id: 3,
          name: "Server template",
          lessons: [
            {
              id: 1,
              title: "Handle Response and request",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "PHP Fundamentals",
      img:"https://www.freepnglogos.com/uploads/php-logo-png/php-logo-png-transparent-svg-vector-bie-supply-1.png",
      summaries: "Perfect course for beginners who love JavaScript server-side",
      chapters: [
        {
          id: 1,
          name: "Getting Started",
          lessons: [
            {
              id: 1,
              title: "PHP Basics",
            },
            {
              id: 2,
              title: "Functions and Control Structures",
            },
          ],
        },
        {
          id: 2,
          name: "Operation and Condition",
          lessons: [
            {
              id: 1,
              title: "Operation Basics",
            },
            {
              id: 2,
              title: "Expression vs Operation",
            },
          ],
        },
        // Add more chapters as needed
      ],
    },
    {
      id: 3,
      title: "Flutter Crash Course",
      img:"https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png",
      summaries: "Learn Flutter for cross-platform mobile development",
      chapters: [
        {
          id: 1,
          name: "Flutter Basics",
          lessons: [
            {
              id: 1,
              title: "Introduction to Flutter",
            },
            {
              id: 2,
              title: "Widgets and Layouts",
            },
          ],
        },
        {
          id: 2,
          name: "Widget and UI",
          lessons: [
            {
              id: 1,
              title: "Basic Widget and layout",
            },
            {
              id: 2,
              title: "Binding Data to Widget",
            },
          ],
        },
        // Add more chapters as needed
      ],
    },
    {
      id: 4,
      title: "JavaScript Mastery",
      img:"https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png",
      summaries: "Master JavaScript for front-end and back-end development",
      chapters: [
        {
          id: 1,
          name: "JavaScript Basics",
          lessons: [
            {
              id: 1,
              title: "Variables and Data Types",
            },
            {
              id: 2,
              title: "Functions and Objects",
            },
          ],
        },
        {
          id: 2,
          name: "JavaScript Operation",
          lessons: [
            {
              id: 1,
              title: "Conditon operation",
            },
            {
              id: 2,
              title: "Loop and keyword",
            },
          ],
        },
        // Add more chapters as needed
      ],
    },
    // Add more courses as needed
  ]

function reducer(state,action) {

  switch(action.type) {
    case "course/detail":
    return

    case  "course/edit":
      console.log("Done dispatching");
      return [...action.payload]

    case "course/create":
      //add new 

      return [...state,action.payload]

      case "course/delete":
        //add new 


  
        return action.payload

    default:
      return state
  }
}


function useCourseContext(){

  const context = useContext(Courseprovider)
  return context
}
function CourseProvider({children}) {

  const [allcourses,dispatch] = useReducer(reducer,course)

  const [singlecourse,setCourse] = useState([])


  return<Courseprovider.Provider value={{ 

    initstate:allcourses,
    dispatch:dispatch,
    isloading:false,
    length:course.length,
    setCourse:setCourse,
    singlecourse,singlecourse

   }}>
        {children}

  </Courseprovider.Provider>;
}

export {CourseProvider,useCourseContext}