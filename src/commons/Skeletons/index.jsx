import React from 'react'
import Skeleton from './Skeleton'

function Skeletons({count}) {
  return <>{Array.from(Array(count || 1).keys()).map(() =><Skeleton />)}</>
   
}

export default Skeletons