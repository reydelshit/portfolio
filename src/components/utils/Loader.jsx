import React from 'react'

const Loader = (props) => {
    const loaderClass = props.className
  return (
    <div className={loaderClass}>
        <div className='spinner'></div>
    </div>
  )
}

export default Loader