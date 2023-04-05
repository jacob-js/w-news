import React from 'react'

function Wrapper({children}) {
  return (
    <div className='max-w-7xl w-11/12 mx-auto'>{children}</div>
  )
}

export default Wrapper