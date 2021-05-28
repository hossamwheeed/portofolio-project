import {
  ProjectBox,
  ProjectName,
} from './Projects.styles';

const Project = ({ projectName, cataSpan, img }) => {
  return (
    <ProjectBox>
      {cataSpan && (<span className='cataSpan'>{cataSpan}</span>)}
      <div><img src={img} alt={projectName} /></div>
      <h3 className='projectName'><ProjectName to='/projects'>{projectName}</ProjectName></h3>
    </ProjectBox>
  )
}

export default Project;
