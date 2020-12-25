import React from 'react'

const Filter = (props) => (
    <div>
      filter shown with: <input onChange={props.onChange}></input>
    </div>
  )

export default Filter