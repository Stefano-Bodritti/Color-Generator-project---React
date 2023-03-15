import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {
  const[alert, setAlert] = useState(false);
  const bcg = props.rgb.join(',');
  const hex = rgbToHex(...props.rgb);

  return (
    <article className={`color ${props.index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} >
      <p className='percent-value'>
        {props.weight}%
      </p>
      <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor
