import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import clothing from '../../Assets/Projects/clothing-ecommerce-app.png';
import employeeManagementApp from '../../Assets/Projects/employee-management-app.png';
import contactManager from '../../Assets/Projects/contact-manager.png';
import sleekFits from '../../Assets/Projects/Sleek-fits.png';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={clothing}
							isBlog={false}
							title="Clothing-Ecommerce-App"
							description="A ecommerce platform for clothing store that mimicks the real world ecommerce application of adding items to cart and checking out and user login this is built with React.js, Redux.js, Sass and Firebase."
							ghLink="https://github.com/RonajPradhan/clothing-ecommerce-app"
							demoLink="http://ecommerce-clothing-app.s3-website-us-east-1.amazonaws.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={contactManager}
							isBlog={false}
							title="Contact Manager"
							description="Simple contact management application built from react class component that is used for CRUD application, built with the help of React.js."
							ghLink="https://github.com/RonajPradhan/Contact-Manager"
							demoLink="http://ronaj-contact-manager.s3-website.us-east-2.amazonaws.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={employeeManagementApp}
							isBlog={false}
							title="Employee Management App"
							description="This is a full stack application created by using React.js, CSS, for the front-end development and uses Java, Springboot on the backend for the REST endpoints that is connected to MySQL database for information storage and retrieval. The application supports role based access control to the registered user and provides authentication and authorization functionality from Spring Security."
							ghLink="https://github.com/RonajPradhan/React-employees-backend"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sleekFits}
							isBlog={false}
							title="SleekFits"
							description="An E-commerce platform complete with real credit checkout, users can search, sell, add to
							cart and checkout their favorite items. The app has six main models which are relational and showcase server-side bits including authentication,
							permissions, sending email, uploading images, and charging credit cards."
							ghLink="https://github.com/RonajPradhan/NextJS-ecommerce-app"
						/>
					</Col>

					{/* <Col md={4} className="project-card">
						<ProjectCard
							imgPath={Gnn}
							isBlog={false}
							title="Detecting pulmonary abnormality with superpixel based Graph Neural Network in chest X-ray "
							description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
							ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
							// demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
						/>
					</Col> */}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
