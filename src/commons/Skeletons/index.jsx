import React from 'react'
import Skeleton from './Skeleton'

function Skeletons({count}) {
  return <>{Array.from(Array(count || 1).keys()).map((n) =><Skeleton  key={n} />)}</>
   
}

export default Skeletons