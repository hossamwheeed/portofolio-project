import { Button } from '../Button/Button';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsWrapper,
  BtnWrap
} from './Projects.styles';
import Project from './Project';
import ImgS1 from '../assets/images/img-7.jpg';

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsContainer>
        <ProjectsWrapper>
          <Project projectName='Galala' img={ImgS1} cataSpan='Landscape' />
          <Project projectName='New Cairo' img={ImgS1} cataSpan='Pumps' />
          <Project projectName='Ismailia' img={ImgS1} cataSpan='Irrigation Network' />
        </ProjectsWrapper>
        <BtnWrap>
          <Button primary="true" to='/projects'>
            View All
        </Button>
        </BtnWrap>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects;
