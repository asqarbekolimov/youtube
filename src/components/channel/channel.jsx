import React from 'react'
import { useParams } from 'react-router-dom'

function Channel() {
  const params = useParams()
  console.log(params);
  return (
    <div>Channel</div>
  )
}

export default Channel