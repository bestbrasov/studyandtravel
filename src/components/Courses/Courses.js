import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <Link to={`/course/${course.cod}`}>
            <img src={`https://source.unsplash.com/1600x900/?${course.oras}`} alt={course.oras} className="course-image" />
            <div className="course-info">
              <h2>{course.titlu}</h2>
              <p>{course.oras}, {course.tara}</p>
              <p>{course.perioada}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
