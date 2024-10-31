import React from 'react'

function UProfile(props) {
  return (
    <div>
      <h1 class="props.designation">Name: {props.name}</h1>
      <p class="props.designation">Detail: {props.detail}</p>
    </div>
  )
}

export default UProfile
