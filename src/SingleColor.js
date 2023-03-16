import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {
  const[alert, setAlert] = useState(false);
  const bcg = props.rgb.join(',');
  const hex = rgbToHex(...props.rgb);

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000)
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article className={`color ${props.index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={handleCopy} >
      <p className='percent-value'>
        {props.weight}%
      </p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
