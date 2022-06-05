import React from 'react'

import Text from './utils/Text'

import TechStack from './TechStack';


const About = () => {

    const daySince = 7;

  return (
    <div className='ab'>
        <div className='__abc'>
            <h1>
              <Text text="—"/>
                About
              <Text text=" ."/>
            </h1>
            <p>I'm scared of <Text text="dogs" /> but I love <Text text="cats" />. <br/> 
            I stored my projects on <Text text="Github" /> so if you're interested go check it <br />
            As of now, I have watched 40+ of animes and my favorite is <Text text="One Piece" />.
            </p>

            <p style={{marginTop: 10}}>I have been exposed to coding for the past <Text text={`${daySince}+ months`} />. </p>
            <p>I'm currently a first year college <Text text="student" /> who loves playing <Text text="basketball" /> at my free time.</p>

            <TechStack />
        </div>

    </div>
  )
}

export default About