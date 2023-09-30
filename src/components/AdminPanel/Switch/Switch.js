import React from 'react'
import './Switch.css'

export default function Switch({ison , handeltoggle , name }) {
  return (
    <>
    <input
    checked={ison}
    onChange={handeltoggle}
        className="react-switch-checkbox "
        id={name}
        type="checkbox"
      />
      <label
        className={`react-switch-label  ${ison ? 'bg-text' : 'bg-bg'}`}
        htmlFor={name}
      >
        <span className={`react-switch-button ${ison ? 'bg-bg' : 'bg-text'}`} />
      </label>
    </>
  )
}
