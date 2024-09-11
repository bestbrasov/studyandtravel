import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Box, Container, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
  }, [cod]);

  if (!course) {
    return <div>Loading...</div>;
  }

  let appDeadline;
  let isDeadlinePassed = false;
  if (course.appdate) {
    const timestamp = parseInt(course.appdate, 10);
    if (!isNaN(timestamp)) {
      const deadlineDate = new Date(timestamp);
      appDeadline = deadlineDate.toLocaleDateString();
      isDeadlinePassed = deadlineDate < new Date();
    }
  }

  return (
    <div className="course-page">
      <Box className="course-hero">
        <img src={"/assets/images_citys/" + course.oras.toLowerCase() + ".jpg"} alt={course.oras} className="course-image" />
        <Box className="course-header">
          <Typography variant="h3" component="h1">
            {course.titlu}
          </Typography>
          <Typography variant="h5" component="h2">
            {course.oras}, {course.tara}
          </Typography>
          <Button
            variant="contained"
            className="hero-button"
            href={`https://www.best.eu.org/event/details.jsp?activity=${course.cod}`}
          >
            Mai multe &nbsp; <KeyboardArrowRightIcon/>
          </Button>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={4} className="course-details">
          <Grid item xs={12} md={6}>
            <Card className="course-content-card">
              <CardContent>
                <Typography variant="h3" component="h3">
                  Descriere
                </Typography>
                <Box dangerouslySetInnerHTML={{ __html: course.descriere }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="course-content-card">
                <CardContent>
                  <Box className="course-info">
                    <EventIcon className="course-icon" />
                    <Typography variant="body2" color="text.secondary">
                      Data: {course.perioada}
                    </Typography>
                  </Box>
                  <Box className="course-info">
                    <PlaceIcon className="course-icon" />
                    <Typography variant="body2" color="text.secondary">
                      Locație: {course.oras}, {course.tara}
                    </Typography>
                  </Box>
                  <Box className="course-info">
                    <AttachMoneyIcon className="course-icon" />
                    <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: `Price: ${course.pret}` }} />
                  </Box>
                </CardContent>
              </Card>
            <Card className="course-content-card">
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Termenul de Aplicare: {appDeadline}
                </Typography>
                {isDeadlinePassed ? (
                  <Typography variant="body2" color="error">
                    Înscrierile pentru acest curs s-au terminat. Te aşteptăm la următoarele cursuri BEST.
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    className="apply-button"
                    href={`https://www.best.eu.org/event/details.jsp?activity=${course.cod}`}
                  >
                    Aplică acum!
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CoursePage;
