import React from 'react'

import { Projects } from '../Details/ProfileDetails';
import Text from './utils/Text';

const Proyekto = () => {
  return (
    <div className='pjx' id='projects'>
        <h1>
          <Text text="—"/>
            Projects 
          <Text text="." />
          </h1>
        <div className='proyek__ct'>
          <div className='proyek__ins'>
            {Projects.map((proj, index) => {
                    const { projectName, projectAbout, projectImage, projectTags } = proj

                    return (
                        <div className='crd__ctx' key={index}>
                            <h1>{projectName}</h1>
                            <p>{projectAbout}</p>
                            <div className='img__ctx'>
                                <img src={projectImage} alt={projectName} />
                            </div>
                            <div className='__tags'>
                                {projectTags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    )
                })}
          </div>

        </div>
    </div>
  )
}

export default Proyekto