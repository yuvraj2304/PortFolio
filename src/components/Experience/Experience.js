import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__grid'>
        {experiences.map((project) => (
          <ExperienceContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Experience
