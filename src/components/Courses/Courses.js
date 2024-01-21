import React from "react";
import Course from "./Course";
import "./Courses.css";// Import the Course component

const CourseList = () => {
  // Create an array with 5 elements (you can modify this array as needed)
  const courses = Array.from({ length: 5 }, (_, index) => (
    <Course key={index} city="Spider" country="Vali Spider" date="11/01 - 20/01/2024"/>
  ));

  return <>{courses}</>;
};

export default CourseList;
