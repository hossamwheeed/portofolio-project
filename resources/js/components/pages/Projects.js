import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-scroll';

import Header from '../Header/Header'
import image from '../assets/images/img-landscape.jpg'
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsWrapper
} from '../Projects/Projects.styles.js';
import Project from '../Projects/Project';
import ImgS1 from '../assets/images/img-7.jpg';

const ProjectsPage = styled.div`
  position: relative;

`;
const ProjectsPageWrapper = styled.div`
  position: relative;

`;


function Projects() {
  return (
    <>
      <ProjectsPageWrapper>
        <Header src={image} header={'Projects'} paragraph={'bowl'} />
        <ProjectsPage>
          <ProjectsSection>
            <h3>Landscape</h3>
            <ProjectsContainer>
              <ProjectsWrapper>
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
              </ProjectsWrapper>
            </ProjectsContainer>
          </ProjectsSection>
          <ProjectsSection>
            <h3>Pumps</h3>
            <ProjectsContainer>
              <ProjectsWrapper>
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
                <Project img={ImgS1} projectName="Galala" />
              </ProjectsWrapper>
            </ProjectsContainer>
          </ProjectsSection>
        </ProjectsPage>
      </ProjectsPageWrapper>
    </>
  )
}

export default Projects;
