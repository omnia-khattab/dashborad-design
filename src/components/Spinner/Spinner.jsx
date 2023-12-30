import React from 'react'
import './Spinner.scss' 

export default function Spinner({className}) {
  return (
    <div className={`spinner ${className}`}>
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
