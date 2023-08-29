import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    <p>{project.date}</p>
    <h5>{project.role}</h5>
    <p className='project__description'>{project.description}</p>
    
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ExperienceContainer
