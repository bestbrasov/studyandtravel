import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import "./Courses.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://new-express-project-nine-flame.vercel.app/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Box className="course-list-container">
      <Grid container spacing={4} justifyContent="center">
        {courses.map((course, index) => (
          <Grid item key={index} sm={12} md={10} xl={8}>
            <Card className="course-card">
              <Link to={`/course/${course.cod}`} className="course-link">
                <CardMedia
                  component="img"
                  alt={course.tara}
                  height="200"
                  src={"/assets/images_citys/" + course.oras.toLowerCase() + ".jpg"}
                />
                <CardContent className="course-info">
                  <Typography variant="h5" component="div" className="course-title">
                    {course.titlu}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="course-location">
                    {course.oras}, {course.tara}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="course-period" 
                    dangerouslySetInnerHTML={{ __html: `Perioada: ${course.perioada}` }}>
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseList;
