import React from 'react'

import Text from './Text'

const Title = (props) => {

    const title = props.title
  return (
    <h1>
        <Text text="—"/>
            {title}
        <Text text=" ."/>
    </h1>
  )
}

export default Title