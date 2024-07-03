import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

const CoursePage = () => {
  const { cod } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log(`Fetching course with cod: ${cod}`);
        const response = await fetch(`http://localhost:3001/api/courses/${cod}`);
        if (!response.ok) {
          throw new Error('Course not found');
        }
        const data = await response.json();
        console.log('Course data fetched:', data);
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourse();
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-page">
      <div className="course-header">
        <h1>{course.titlu}</h1>
        <h2>{course.oras}, {course.tara}</h2>
      </div>
      <div className="course-content">
        <img src={`https://source.unsplash.com/1600x900/?${course.oras}`} alt={course.oras} className="course-image" />
        <p>{course.descriere}</p>
        <p><strong>Dates:</strong> {course.perioada}</p>
        <p><strong>Location:</strong> {course.locatie}</p>
        <p><strong>Price:</strong> {course.pret}</p>
        <p><strong>Application Deadline:</strong> {new Date(course.appdate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CoursePage;
